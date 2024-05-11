import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.NotYetConnectedException;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;
import java.util.Stack;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import CLI.InputHandler;
import Collection.CollectionObject.MusicBand;
import Collection.CollectionObject.ZonedDateTimeAdapter;
import Communication.CommandResult;
import Communication.Request;

public class Client {
    private static final int BUFFERSIZE = 2048;
    private final String host = "127.0.0.1";
    private final int port = 2804;
    private SocketChannel clientSocketChannel;
    private ByteBuffer buffer;
    private InputHandler clientInputHandler = new InputHandler();
    private MusicBandRequester musicBandRequester = new MusicBandRequester();
    private Stack<String> processedFiles = new Stack<>(); 
    private GsonBuilder gsonBuilder = new GsonBuilder().registerTypeAdapter(ZonedDateTime.class, new ZonedDateTimeAdapter());
    private Gson gson = gsonBuilder.create();

    public void run() {

        try {
            clientSocketChannel = SocketChannel.open();
            clientSocketChannel.configureBlocking(false);
            System.out.println("Initializing connection, please wait");
            clientSocketChannel.connect(new InetSocketAddress(host, port));
            
                try {
                    clientSocketChannel.finishConnect();
                } catch (IOException e) {
                    System.out.println("Server is not running or the parameters are wrong. Try again.");
                    System.exit(1);
                }
            System.out.println();
            System.out.println("Hello! This is a program for working with music band collections. \nType \"help\" for more info.");

            while(true){    
                String[] clientInput = clientInputHandler.getInput();
                if (clientInput == null){
                    System.out.println("Null sent. Nothing will be executed.");
                }
                else{
                    switch (clientInput[0]){
                        case "exit": 
                            exitCase(clientSocketChannel);
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
                            processedFiles.clear();
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
            System.out.println("Connection is lost.");
            //e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NullPointerException e){
            e.printStackTrace();
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Not enough or too much arguments provided");
        } catch (NotYetConnectedException e){
            //System.out.println("No connection or connection is lost. Try again.");
            e.printStackTrace();
        } catch (InterruptedException e) {
			System.out.println("THREAD IS INTERRUPTED!!!!!!");
		}
    }

    private void send (Request request) throws IOException, NotYetConnectedException{
        buffer = buffer == null ? ByteBuffer.allocate(BUFFERSIZE) : buffer.clear();
        String stringJsonRequest = gson.toJson(request);
        byte[] reqestBytes = stringJsonRequest.getBytes(StandardCharsets.UTF_8);
        buffer.put(reqestBytes);
        System.out.println("JSON data to be sent: " + stringJsonRequest + "\nits size: " + stringJsonRequest.getBytes().length);
        buffer.flip();
        clientSocketChannel.write(buffer);
    }
    private void receiveAndProcessResponse() throws ClassNotFoundException, IOException, NotYetConnectedException, InterruptedException{
        int n ;
        buffer.clear();
        do {
            Thread.sleep(2000);
            System.out.println("Waiting for response...");
            n = clientSocketChannel.read(buffer);                        
        } while (n == 0);
        System.out.println("bytes received:" + n);
        buffer.flip();
        byte[] dataBytes = new byte[buffer.remaining()];
        buffer.get(dataBytes);
        String responseData = new String(dataBytes, StandardCharsets.UTF_8);
        System.out.println(responseData);
        CommandResult response = gson.fromJson(responseData, CommandResult.class);
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
                            exitCase(clientSocketChannel);
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
                System.out.println("No connection or connection is lost.");
                //System.out.println(e.getMessage());
            } catch (NotYetConnectedException e){
                System.out.println("No connection or connection is lost. Try again.");
            } catch (InterruptedException e) {
                System.out.println("THREAD IS INTERRUPTED!!!!!!");
			}
    }

    private void addCase(String[] clientInput) throws IOException, ClassNotFoundException, NotYetConnectedException, InterruptedException{
        MusicBand mb = musicBandRequester.requestUserBand();
        Request addRequest = new Request(clientInput, mb);
        send(addRequest);
        receiveAndProcessResponse();
    }

    private void exitCase(SocketChannel clientSocketChannel) throws IOException{
        System.out.println();
        System.out.println("--------------------------");    
        System.out.println("Closing connection... Goodbye!");
        clientSocketChannel.close();
        System.exit(0);
    } 

    private void saveCase(){
        System.out.println();
        System.out.println("--------------------------");    
        System.out.println("This command is not possible on client");
    }
    private void updateCase(String[] clientInput) throws IOException, ClassNotFoundException, NotYetConnectedException, InterruptedException{
        Request updateRequest = new Request(clientInput);
        send(updateRequest);
        System.out.println("Validating...");
        buffer = ByteBuffer.allocate(BUFFERSIZE);
        clientSocketChannel.read(buffer);
        buffer.flip();
        byte[] dataBytes = new byte[buffer.remaining()];
        buffer.get(dataBytes);
        String responseData = new String(dataBytes);
        CommandResult response = gson.fromJson(responseData, CommandResult.class);
        System.out.println(response);       

        if(!response.isSuccess()){
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
