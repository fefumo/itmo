import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetSocketAddress;
import java.nio.channels.SocketChannel;
import java.util.Stack;

import CLI.InputHandler;
import CLI.MusicBandRequester;
import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;

public class Client {
    //private static final int BUFFERSIZE = 1024;
    private final String host = "127.0.0.1";
    private final int port = 2804;
    private SocketChannel socketChannel;
    private ObjectOutputStream serverWriter;
    private ObjectInputStream serverReader;
    InputHandler clientInputHandler = new InputHandler();
    MusicBandRequester musicBandRequester = new MusicBandRequester();
    Stack<String> processedFiles = new Stack<>(); 

    public void run() {

        try {
            socketChannel = SocketChannel.open();
            socketChannel.connect(new InetSocketAddress(host, port));
            System.out.println("Initializing connection, please wait");
            System.out.println();
            //socketChannel.configureBlocking(false);
            serverWriter = new ObjectOutputStream(socketChannel.socket().getOutputStream());            
            serverReader = new ObjectInputStream(socketChannel.socket().getInputStream());
            System.out.println("Hello! This is a program for working with music band collections. \nType \"help\" for more info.");

            while(true){    
                String[] clientInput = clientInputHandler.getInput();
                if (clientInput == null){
                    System.out.println("Null sent. Nothing will be executed.");
                }
                else{
                    switch (clientInput[0]){
                        case "exit": 
                            exitCase(socketChannel);
                        case "save":
                            saveCase();
                            break;
                        case "add":
                            addCase(clientInput);
                            break;
                        case "update_id":
                            updateCase(clientInput);
                            break;
                        case "execute_script":
                            executeSctipt(clientInput[1]);
                            break;
                        default:
                            Request request = new Request(clientInput);
                            send(request);
                            receiveAndProcessResponse();
                            break;
                    }
                }
            }

        } catch (IOException e) {
            System.out.println("Cannot connect to the server. Check parameters and try again.");
            //e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NullPointerException e){
            e.printStackTrace();
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Not enough or too much arguments provided");
        }
    }

    private void send (Request request) throws IOException{
        serverWriter.writeObject(request);
    }
    private void receiveAndProcessResponse() throws ClassNotFoundException, IOException{
        CommandResult response = (CommandResult) serverReader.readObject();
        System.out.println(response);       
    }
    private void executeSctipt(String path) throws ClassNotFoundException{
            try {
                BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(path)));
                InputHandler ih = new InputHandler();    
                if (processedFiles.contains(path)){
                    System.out.println();
                    System.out.println("--------------------------");    
                    System.out.println("Recursion found. Stopping execution...");
                    System.out.println();
                    System.out.println("--------------------------");    
                    System.out.println("Scripts have ended. Buffers are closed, you can now work manually again!");    
                    br.close();
                    return;
                }
                processedFiles.add(path);
                String line;
                System.out.println();
                System.out.println("--------------------------");    
                System.out.println("Script started executing. Note: \">>>\" means the input is coming form the file.");    
                while ((line = br.readLine()) != null) {
                    String[] commandAndArgs = ih.convertFileLine(line);
                    String command = commandAndArgs == null ? null : commandAndArgs[0]; //NullPointerException otherwise...
                    if (command == null){
                        System.out.println("Null sent. Nothing will be executed.");
                    }
                    else{
                        switch (command) {
                        case "add":
                            MusicBand nonUserBand = musicBandRequester.requestNonUserBand(br);
                            Request req = new Request(commandAndArgs, nonUserBand);
                            send(req);
                            receiveAndProcessResponse();
                            break;
                        case "save":
                            saveCase();
                            break;
                        case "exit":
                            exitCase(socketChannel);
                            break;
                        case "update_id":
                            updateCase(commandAndArgs); //поменять для скрипта.
                            break;
                        case "execute_script":
                            executeSctipt(commandAndArgs[1]);
                            return;
                            //break;
                        default:
                            Request request = new Request(commandAndArgs);
                            send(request);
                            receiveAndProcessResponse();
                            break;
                        }
                    }
                }
                br.close();
                System.out.println();
                System.out.println("--------------------------");    
                System.out.println("Script has ended. Buffers are closed, you can now work manually again!");    
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
    }

    private void addCase(String[] clientInput) throws IOException, ClassNotFoundException{
        MusicBand mb = musicBandRequester.requestUserBand();
        Request addRequest = new Request(clientInput, mb);
        send(addRequest);
        receiveAndProcessResponse();
    }

    private void exitCase(SocketChannel socketChannel) throws IOException{
        System.out.println();
        System.out.println("--------------------------");    
        System.out.println("Closing connection... Goodbye!");
        socketChannel.close();
        System.exit(0);
    } 

    private void saveCase(){
        System.out.println();
        System.out.println("--------------------------");    
        System.out.println("This command is not possible on client");
    }
    private void updateCase(String[] clientInput) throws IOException, ClassNotFoundException{
        Request updateRequest = new Request(clientInput);
        send(updateRequest);
        System.out.println("Validating...");
        CommandResult result = (CommandResult) serverReader.readObject();
        System.out.println(result);
        if(!result.isSuccess()){
            return;
        }
        long id = Long.valueOf(clientInput[1]);                            
        MusicBand newBand = musicBandRequester.requestUserBand();
        newBand.setId(id);
        String[] arrayForRequest = "add".split(" ");
        Request addRequest2 = new Request(arrayForRequest, newBand);
        send(addRequest2);
        receiveAndProcessResponse();
    }
}
