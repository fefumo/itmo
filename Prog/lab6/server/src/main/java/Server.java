import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import CLI.InputHandler;
import Collection.CollectionObject.ZonedDateTimeAdapter;
import Communication.CommandResult;
import Communication.Request;
import Managers.CommandManager;
import Managers.DumpManager;

public class Server {
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
            System.out.println("Server started running!");
            
            while (true) {
                SocketChannel clientSocketChannel = server.accept();
                
                if (clientSocketChannel == null){
                    System.out.println("No clients connected, waiting for connections...");
                    Thread.sleep(3000);
                }
                else{
                    System.out.println();
                    System.out.println("--------------------------");    
                    System.out.println("Server has accepted a new client " + clientSocketChannel.socket().getRemoteSocketAddress());
                    processClient(clientSocketChannel);
                    
                    System.out.println();
                    System.out.println("--------------------------");    
                    System.out.println("Processing client has ended.");
                    
                    System.out.println();
                    System.out.println("--------------------------");
                    System.out.println("Returning to waiting for connections...");
                }
            }
    

        } catch (IOException e) {
            System.out.println("IO exception occured. Most likely the chosen port is already being used. Try again");
            //e.printStackTrace();
        } catch (ClassNotFoundException e){
            System.out.println("ClassNotFoundException during client processing");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void processClient(SocketChannel clientSocketChannel) throws ClassNotFoundException, IOException{
        //отправление
        RequestHandler requestHandler = new RequestHandler(this.commandManager);
        boolean clientConnected = true;
        //clientSocketChannel.socket().setSoTimeout(30000);
        while (clientConnected){
            try {
                //получение
                buffer = buffer == null ? ByteBuffer.allocate(BUFFERSIZE) : buffer.clear();
                int n;
                do {
                    n = clientSocketChannel.read(buffer);
                    System.out.println("Waiting for request...");                    
                } while (n == 0);
                if (n == -1 ){
                    throw new IOException("Client disconnected");
                }
                System.out.println("Bytes received: " + n);
                buffer.flip();
                byte[] requestBytes = new byte[buffer.remaining()];
                buffer.get(requestBytes);
                String data = new String(requestBytes, StandardCharsets.UTF_8);
                System.out.println(data);
                Request request = gson.fromJson(data, Request.class);
                
                //обработка
                CommandResult newResponse = requestHandler.processRequest(request);

                //отправление
                buffer.clear();
                String stringResponseJSON = gson.toJson(newResponse);
                byte[] responseBytes = stringResponseJSON.getBytes();
                buffer.put(responseBytes);
                System.out.println("JSON data to be sent: " + stringResponseJSON + "\nits size: " + stringResponseJSON.getBytes().length);
                buffer.flip();
                clientSocketChannel.write(buffer);

            } catch (IOException e ) {
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("client " + clientSocketChannel.socket().getLocalSocketAddress() +  " disconnected");
                //e.printStackTrace();
                clientConnected = false;
            }
        }
        System.out.println();
        System.out.println("--------------------------");
        System.out.println("Closing connection...");
        clientSocketChannel.close();
    }
    
    private void initializeCollection(){
        String path = System.getenv("FILE_PATH");
        if (path == null || path.isBlank()) {
            System.out.println("Env variable \"FILE_PATH\" is not set.");
            System.exit(0);
        }

        DumpManager dumpManager = DumpManager.getInstance();
        dumpManager.unmarshalAndSetCollectionFromXML(path);
        System.out.println();
        System.out.println("--------------------------");
        System.out.println("Collection has been initialized");
    }
    private void createAndStartThreadForInput(){
        Thread consoleInputThread = new Thread(() ->{
            while(true){
                String[] serverInputArray = inputHandler.getInput();
                String serverInput = serverInputArray == null ? null : serverInputArray[0];
                if (serverInput == null){
                    System.out.println("Null passed. nothing will be executed.");
                }
                else{
                    switch (serverInput) {
                        case "exit":
                            commandManager.executeCommand(serverInputArray);
                            break;
                        case "save":
                            CommandResult result = commandManager.executeCommand(serverInputArray);
                            System.out.println(result);
                            break;
                        default:
                            System.out.println("There are only \"save\" and \"exit\" commands available");
                            break;
                    }    
                }
            }
        });
        consoleInputThread.start();
    }
}