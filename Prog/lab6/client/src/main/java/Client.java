import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetSocketAddress;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;

import CLI.Managers.InputHandler;
import Collection.CollectionObject.MusicBand;
import Collection.CollectionObject.MusicBandRequester;
import Communication.Request;
import Communication.Response;

public class Client {
    //private static final int BUFFERSIZE = 1024;
    private final String host = "127.0.0.1";
    private final int port = 2804;
    private SocketChannel socketChannel;
    private ObjectOutputStream serverWriter;
    private ObjectInputStream serverReader;

    public void run() {
        InputHandler clientInputHandler = new InputHandler();
        MusicBandRequester musicBandRequester = new MusicBandRequester();

        try {
            socketChannel = SocketChannel.open();
            socketChannel.connect(new InetSocketAddress(host, port));

            // while(socketChannel.finishConnect() != true){ //doesnt work for local connection, cuz its immediate
                // System.out.println("Connecting...");
            // };
            
            System.out.println("Initializing connection, please wait");
            System.out.println();
            serverWriter = new ObjectOutputStream(socketChannel.socket().getOutputStream());
            serverReader = new ObjectInputStream(socketChannel.socket().getInputStream());
            
            System.out.println("Hello! This is a program for working with music band collections. \nType \"help\" for more info.");

            while(true){
                String clientString = clientInputHandler.getInput();
                if (clientString == null){
                    System.out.println("Null sent. Nothing will be executed.");
                }
                else{
                    switch (clientString){
                        case "exit": 
                            System.out.println();
                            System.out.println("--------------------------");    
                            System.out.println("Closing connection... Goodbye!");
                            socketChannel.close();
                            System.exit(0);
                        case "save":
                            System.out.println();
                            System.out.println("--------------------------");    
                            System.out.println("This command is not possible on client");
                            break;
                        case "add":
                            MusicBand mb = musicBandRequester.requestUserBand();
                            Request addRequest = new Request(clientString, mb);
                            send(addRequest);
                            Response addresponse = receiveResponse();
                            processResponse(addresponse);
                            break;
                        default:
                            Request request = new Request(clientString);
                            send(request);
                            Response response = receiveResponse();
                            processResponse(response);    
                    }
                }
                
            }

        } catch (IOException e) {
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Cannot connect to the server. Check parameters and try again.");
            //e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NullPointerException e){
            e.printStackTrace();
        }
    }

    private void send (Request request) throws IOException{
        serverWriter.writeObject(request);
    }
    private Response receiveResponse() throws ClassNotFoundException, IOException{
        Response response = (Response) serverReader.readObject();
        return response;        
    }

    private void processResponse(Response response) throws IOException{
        byte[] responseData = response.getResponseData();
        String dataAsString = new String(responseData, StandardCharsets.UTF_8);
        System.out.println(dataAsString);
    }

}
