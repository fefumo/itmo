import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetSocketAddress;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;

import Communication.CommandResult;
import Communication.Request;
import Managers.CommandManager;
import Managers.DumpManager;

public class Server {
    //private static final int BUFFERSIZE = 1024;
    private final String host = "127.0.0.1";
    private final int port = 2804;

    private ObjectOutputStream objectOutputStream;
    private ObjectInputStream objectInputStream;
    private ServerSocketChannel server;
    private CommandManager commandManager;
    // private InputHandler inputHandler = new InputHandler();
    public void run(){
        commandManager = new CommandManager();
        commandManager.buildCommands();

        initializeCollection();

        try {
            server = ServerSocketChannel.open();
            server.configureBlocking(false);
            server.bind(new InetSocketAddress(host, port));
            System.out.println("Server started running!");
            
            while (true) {
                SocketChannel clientSocketChannel = server.accept();
                // String[] serverInputArray = inputHandler.getInput();
                // String serverInput = serverInputArray == null ? null : serverInputArray[0];
                // if (serverInput == null){
                //     System.out.println("Null passed. nothing will be executed.");
                // }
                // else{
                //     switch (serverInput) {
                //         case "exit":
                //             commandManager.executeCommand(serverInputArray);
                //             break;
                //         case "save":
                //             CommandResult result = commandManager.executeCommand(serverInputArray);
                //             System.out.println(result);
                //             break;
                //         default:
                //             System.out.println("There are only \"save\" and \"exit\" commands available");
                //             break;
                //     }    
                // }
                //necessary because of non-blocking mode
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
            System.out.println("IO exception occured. Most likely ports are already being used. Try again");
            //e.printStackTrace();
        } catch (ClassNotFoundException e){
            System.out.println("ClassNotFoundException during client processing");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void processClient(SocketChannel clientSocketChannel) throws ClassNotFoundException, IOException{
        objectInputStream = new ObjectInputStream(clientSocketChannel.socket().getInputStream());
        objectOutputStream = new ObjectOutputStream(clientSocketChannel.socket().getOutputStream());
        RequestHandler requestHandler = new RequestHandler(this.commandManager);
        boolean clientConnected = true;
        //clientSocketChannel.socket().setSoTimeout(30000);
        while (clientConnected){
            try {
                Request request = (Request) objectInputStream.readObject();
                CommandResult newResponse = requestHandler.processRequest(request);
                objectOutputStream.writeObject(newResponse);
                objectOutputStream.flush();                        
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
        System.out.println("Closing streams and connection...");
        objectInputStream.close();
        objectOutputStream.close();
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
}
