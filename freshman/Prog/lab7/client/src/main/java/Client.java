import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.Console;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.NotYetConnectedException;
import java.nio.channels.SocketChannel;
import java.util.Scanner;
import java.util.Stack;

import CLI.InputHandler;
import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import Communication.User;

public class Client {
    private static final int BUFFERSIZE = 2048;
    private final String host = "127.0.0.1";
    private final int port = 2804;
    private SocketChannel clientSocket;
    private InputHandler clientInputHandler = new InputHandler();
    private MusicBandRequester musicBandRequester = new MusicBandRequester();
    private Stack<String> processedFiles = new Stack<>(); 
    private User user = null;
    private boolean registered = false;
    Scanner scanner = new Scanner(System.in);

    public void run() {
        System.out.println("Initializing connection, please wait");
        try {
            clientSocket = SocketChannel.open();
            clientSocket.connect(new InetSocketAddress(host, port));
            clientSocket.finishConnect();
        } catch (IOException e) {
            System.out.println("Server is not running or the parameters are wrong. Check server status, provided arguments and try again.");
            System.exit(1);
        }
        
        //authentication
        try {
			startAuthentication();
		} catch (IOException e) {
			System.out.println("Exception during authentication: " + e.getMessage());
		}
        
        while (true) {
            try {
                // System.out.println("in main while true");
                String[] clientInput = clientInputHandler.getInput();
                if (clientInput == null){
                    System.out.println("Null sent. Nothing will be executed.");
                }
                else{
                    CommandResult response = null;
                    switch (clientInput[0]){
                        case "exit": 
                            exitCase(clientSocket);
                        // case "save":
                        //     saveCase();
                        //     break;
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
                            Request request = new Request(clientInput, null, user);
                            send(request);
                            response = readResponse();
                            System.out.println(response);
                            break;
                    }
                }
            } catch (IOException e) {
                System.out.println("Connection is lost. Waiting for server...");
                while (true) {
                    try {
                        clientSocket = SocketChannel.open();
                        System.out.println("Reconnecting...");
                        clientSocket.connect(new InetSocketAddress(host, port));
                        clientSocket.finishConnect();
                        System.out.println("Reconnected to the server.");
                        startAuthentication();
                        break;
                    } catch (IOException re) {
                        System.out.println("Failed to reconnect. Retrying in 5 seconds...");
                        try {
                            Thread.sleep(5000);
                        } catch (InterruptedException ie) {
                            Thread.currentThread().interrupt();
                            System.out.println("Thread was interrupted, failed to complete operation");
                            return;
                        }
                    }
                }
                // run();
            }
        }
    }

    private void send (Request request) throws IOException{
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
        objectOutputStream.writeObject(request);
        objectOutputStream.flush();
    
        byte[] data = byteArrayOutputStream.toByteArray();
        ByteBuffer sizeBuffer = ByteBuffer.allocate(Integer.BYTES);
        sizeBuffer.putInt(data.length);
        sizeBuffer.flip();
        clientSocket.write(sizeBuffer);  // Отправляем размер данных
    
        ByteBuffer dataBuffer = ByteBuffer.wrap(data);
        while (dataBuffer.hasRemaining()) {
            clientSocket.write(dataBuffer);  // Отправляем сами данные
        }
        // System.out.println("send request ended.");
    }
    
    private CommandResult readResponse() throws IOException {
        // System.out.println("in readresponse");
        InputStream inputStream = Channels.newInputStream(clientSocket);
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        // Чтение размера данных
        ByteBuffer sizeBuffer = ByteBuffer.allocate(Integer.BYTES);
        while (sizeBuffer.hasRemaining()) {
            int bytesRead = clientSocket.read(sizeBuffer);
            if (bytesRead == -1) {
                throw new IOException("Connection closed prematurely");
            }
        }
        sizeBuffer.flip();
        int dataSize = sizeBuffer.getInt();

        // Чтение данных заданного размера
        byte[] buffer = new byte[BUFFERSIZE];
        int totalBytesRead = 0;
        while (totalBytesRead < dataSize) {
            int bytesRead = inputStream.read(buffer, 0, Math.min(buffer.length, dataSize - totalBytesRead));
            if (bytesRead == -1) {
                throw new IOException("Connection closed prematurely");
            }
            byteArrayOutputStream.write(buffer, 0, bytesRead);
            totalBytesRead += bytesRead;
        }

        byte[] objToSerialize = byteArrayOutputStream.toByteArray();
        ByteArrayInputStream bais = new ByteArrayInputStream(objToSerialize);

        try (ObjectInputStream ois = new ObjectInputStream(bais)) {
            // System.out.println("before ois.readobject return in reading responce block");
            return (CommandResult) ois.readObject();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }
    
    private void closeSocket() {
        try {
            clientSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void startAuthentication() throws IOException{

        System.out.println("Hello, please provide your credentials");
        System.out.println("Enter login");
        String username = null;
        while( username == null){
            String nextline = scanner.nextLine();  
            username =  nextline == "" ? null : nextline;
        }
        System.out.println("Enter password");
        Console console = System.console();
        String password = null;
        while (password == null){
            char[] line = console.readPassword();
            String nString = new String(line);
            password = nString.length() == 0 ? null : nString;
        }

        String[] authReqInfo = ("AuthenticateRequest" + " " +  username + " " + password).split(" ");
        user = new User(username, password);
        Request authReq = new Request(authReqInfo, null, user);
        send(authReq);
        CommandResult response = readResponse();
        System.out.println("response auth:" + response);
        if (!response.isSuccess()){
            System.out.println(response.getErrorMessage());
            System.out.println("Do you want to register? y/n");
            if (scanner.nextLine().equalsIgnoreCase("y")){
                while(!registered){
                    register();
                }
            }
            else{
                System.out.println("Ok, bye!");
                closeSocket();
                System.exit(0);
            }
        }
        System.out.println("\nCongrats, you are now connected and authenticated. \nType \"help\" for more info.");
    }
    
    private void register() throws IOException {
        System.out.println("Enter login");
        String username = null;
        while( username == null){
            String nextline = scanner.nextLine();  
            username =  nextline == "" ? null : nextline;
        }
        System.out.println("Enter password");
        Console console = System.console();
        String password = null;
        while (password == null){
            char[] line = console.readPassword();
            String nString = new String(line);
            password = nString.length() == 0 ? null : nString;
        }

        user = new User(username, password);
        String[] RegistrationReqInfo = ("RegistrateRequest" + " " +  username + " " + password).split(" ");
        Request request = new Request(RegistrationReqInfo, null, user);
        send(request);
        CommandResult response = readResponse();
        System.out.println( "response reg: " + response);
        if (!response.isSuccess()){
            System.out.println("Error: "+ response.getErrorMessage());
            return;
        }
        else{
            registered = true;
            return;
        }
    }

    private void executeSctipt(String path) {
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
                        CommandResult response = null;
                        switch (command) {
                        case "add":
                            MusicBand nonUserBand = musicBandRequester.requestNonUserBand(br, this.user);
                            Request req = new Request(commandAndArgs, nonUserBand, user);
                            send(req);
                            response = readResponse();
                            System.out.println(response);
                            break;
                        // case "save":
                        //     saveCase();
                        //     break;
                        case "exit":
                            exitCase(clientSocket);
                            break;
                        case "update_id":
                            updateCase(commandAndArgs);
                            break;
                        case "execute_script":
                            executeSctipt(commandAndArgs[1]);
                            return;
                            //break;
                        default:
                            Request request = new Request(commandAndArgs, null, user);
                            send(request);
                            response = readResponse();
                            System.out.println(response);
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
            }
    }

    private void addCase(String[] clientInput) throws IOException{
        MusicBand mb = musicBandRequester.requestUserBand(this.user);
        Request addRequest = new Request(clientInput, mb, user);
        send(addRequest);
        CommandResult response = readResponse();
        System.out.println(response);
    }

    private void exitCase(SocketChannel clientSocket) throws IOException{
        System.out.println();
        System.out.println("--------------------------");    
        System.out.println("Closing connection... Goodbye!");
        closeSocket();
        System.exit(0);
    } 

    // private void saveCase(){
    //     System.out.println();
    //     System.out.println("--------------------------");    
    //     System.out.println("This command is not possible on client");
    // }
    private void updateCase(String[] clientInput) throws IOException{
        MusicBand musicBandForUpdate = musicBandRequester.requestUserBand(user);
        long id;
        try {
            id = Long.parseLong(clientInput[1]);            
        } catch (Exception e) {
            System.out.println("There has to be an id (type: Long) provided, info: " + e.getMessage());
            return;
        }
        if (clientInput[1] == null){
            System.out.println("There has to be an id (type: Long) provided");
            return;
        }
        musicBandForUpdate.setId(id);
        send(new Request(clientInput, musicBandForUpdate, user));
        CommandResult response = readResponse();
        System.out.println(response);
    }
}
