import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import CLI.InputHandler;
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
    private InputHandler inputHandler = new InputHandler();

    public void run(){
        commandManager = new CommandManager();
        commandManager.buildCommands();
        initializeCollection();

        try {
            server = ServerSocketChannel.open();
            server.configureBlocking(false);
            server.bind(new InetSocketAddress(host, port));
            logger.info("Server is opened and binded to the address " + server.getLocalAddress().toString());
            
            while (true) {
                SocketChannel clientSocketChannel = server.accept();
                logger.info("Server is now waiting for new connections");
                if (clientSocketChannel == null){
                    createInputService();
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
        } 
        // catch (InterruptedException e) {
            // logger.fatal(e);
        // }
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
                
                ByteArrayInputStream bis = new ByteArrayInputStream(requestBytes);
                ObjectInputStream ois = new ObjectInputStream(bis);
                Request request = (Request) ois.readObject();
                bis.close();
                ois.close();

                logger.info("Bytes recieved and deserialized: " + n);                
                
                //обработка
                CommandResult newResponse = requestHandler.processRequest(request);
                logger.info("Processing request is finished");

                //отправление
                buffer.clear();
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                ObjectOutputStream oos = new ObjectOutputStream(bos);
                oos.writeObject(newResponse);
                byte[] responseBytes = bos.toByteArray();
                buffer.put(responseBytes);
                logger.info("Bytes to be sent: " + responseBytes.length);
                buffer.flip();
                clientSocketChannel.write(buffer);
                bos.close();
                oos.close();

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
    private void createInputService() throws IOException{
        logger.info("InputService started");
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
                    return;
                case "save":
                    logger.info("INPUT: save");
                    CommandResult result = commandManager.executeCommand(serverInputArray);
                    logger.info(result);
                    return;
                default:
                    logger.info("INPUT: " + serverInput);
                    System.out.println("There are only \"save\" and \"exit\" commands available");
                    return;
            }    
        }
        //logger.info("Thread for input has been created");
    }
}