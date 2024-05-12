import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import CLI.InputHandler;
import Collection.CollectionObject.ZonedDateTimeAdapter;
import Communication.CommandResult;
import Communication.Request;
import Managers.CommandManager;
import Managers.DumpManager;

public class Server {
    Logger logger = LogManager.getLogger(Server.class);
    private static final int BUFFERSIZE = 2048;
    private final String host = "127.0.0.1";
    private final int port = 2804;
    private ServerSocketChannel server;
    private CommandManager commandManager;
    private ByteBuffer buffer;
    private GsonBuilder gsonBuilder = new GsonBuilder().registerTypeAdapter(ZonedDateTime.class, new ZonedDateTimeAdapter());
    private Gson gson = gsonBuilder.create();
    private InputHandler inputHandler = new InputHandler();

    public void run(){
        commandManager = new CommandManager();
        commandManager.buildCommands();
        initializeCollection();
        createAndStartThreadForInput();
        try {
            server = ServerSocketChannel.open();
            server.configureBlocking(false);
            server.bind(new InetSocketAddress(host, port));
            logger.info("Server is opened and binded to the address " + server.getLocalAddress().toString());
            
            while (true) {
                SocketChannel clientSocketChannel = server.accept();
                logger.info("Server is now waiting for new connections");
                if (clientSocketChannel == null){
                    System.out.println("No clients connected, waiting for connections...");
                    Thread.sleep(3000);
                }
                else{  
                    logger.info("Server has accepted a new client " + clientSocketChannel.socket().toString());
                    processClient(clientSocketChannel);   
                    logger.warn("Processing client has ended. Returning to waiting for connections...");
                }
            }
    

        } catch (IOException e) {
            logger.fatal("IO exception occured. Most likely the chosen port is already being used. Try again");
        } catch (ClassNotFoundException e){
            logger.error("ClassNotFoundException during client processing");
        } catch (InterruptedException e) {
            logger.fatal(e);
        }
    }

    private void processClient(SocketChannel clientSocketChannel) throws ClassNotFoundException, IOException{
        //отправление
        RequestHandler requestHandler = new RequestHandler(this.commandManager);
        boolean clientConnected = true;
        while (clientConnected){
            try {
                //получение
                buffer = buffer == null ? ByteBuffer.allocate(BUFFERSIZE) : buffer.clear();
                int n;
                do {
                    n = clientSocketChannel.read(buffer);
                    logger.info("Waiting for request...");                    
                } while (n == 0);
                if (n == -1){
                    throw new IOException("Client disconnected");
                }
                buffer.flip();
                byte[] requestBytes = new byte[buffer.remaining()];
                buffer.get(requestBytes);
                String data = new String(requestBytes, StandardCharsets.UTF_8);
                //logger.info("Bytes received: " + n +"\nJSON string received: " + data);
                logger.info("Bytes recieved and deserialized: " + n);
                Request request = gson.fromJson(data, Request.class);
                
                //обработка
                CommandResult newResponse = requestHandler.processRequest(request);
                logger.info("Processing request is finished");

                //отправление
                buffer.clear();
                String stringResponseJSON = gson.toJson(newResponse);
                byte[] responseBytes = stringResponseJSON.getBytes();
                buffer.put(responseBytes);
                //logger.info("JSON data to be sent: " + stringResponseJSON + "\nits size: " + stringResponseJSON.getBytes().length);
                logger.info("Bytes to be sent: " + stringResponseJSON.getBytes().length);
                buffer.flip();
                clientSocketChannel.write(buffer);

            } catch (IOException e ) {
                logger.warn("Client " + clientSocketChannel.socket().toString() +  " disconnected");
                logger.info("Saving collection after client's disconnect...");
                CommandResult clientDisc = commandManager.executeCommand("save".split(" ", 2));
                logger.info(clientDisc);
                clientConnected = false;
            }
        }
        logger.info("Closing connection...");
        clientSocketChannel.close();
        logger.info("Connection closed");
    }
    
    private void initializeCollection(){
        String path = System.getenv("FILE_PATH");
        if (path == null || path.isBlank()) {
            logger.fatal("Env variable \"FILE_PATH\" is not set.");
            System.exit(0);
        }

        DumpManager dumpManager = DumpManager.getInstance();
        dumpManager.unmarshalAndSetCollectionFromXML(path);
        logger.info("Collection has been initialized");
    }
    private void createAndStartThreadForInput(){
        Thread consoleInputThread = new Thread(() ->{
            while(true){
                String[] serverInputArray = inputHandler.getInput();
                String serverInput = serverInputArray == null ? null : serverInputArray[0];
                if (serverInput == null){
                    logger.info("INPUT: Null passed. nothing will be executed.");
                }
                else{
                    switch (serverInput) {
                        case "exit":
                            logger.info("INPUT: exit");
                            CommandResult exitResult = commandManager.executeCommand(serverInputArray);
                            logger.info("Saving before exiting...");
                            logger.info(exitResult);
                            commandManager.executeCommand(serverInputArray);
                            break;
                        case "save":
                            logger.info("INPUT: save");
                            CommandResult result = commandManager.executeCommand(serverInputArray);
                            logger.info(result);
                            break;
                        default:
                            logger.info("INPUT: " + serverInput);
                            System.out.println("There are only \"save\" and \"exit\" commands available");
                            break;
                    }    
                }
            }
        });
        consoleInputThread.start();
        logger.info("Thread for input has been created");
    }
}