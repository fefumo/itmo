import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.Future;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import CLI.InputHandler;
import Commands.Exit;
import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
import Managers.CollectionManager;
import Managers.CommandManager;
import Managers.IdManager;

public class Server {

    public Server(String host, int port, JdbcProvider jdbcProvider){
        this.host = host;
        this.port = port;
    };
    private String host;
    private int port;
    // private static final int BUFFERSIZE = 2048;
    private ServerSocketChannel server;
    private CommandManager commandManager;
    private static Logger logger = LogManager.getLogger(Server.class);
    private final ExecutorService readPool = Executors.newCachedThreadPool();
    private final ForkJoinPool processingPool = new ForkJoinPool();
    private final ExecutorService writePool = Executors.newFixedThreadPool(10);
    RequestHandler requestHandler = new RequestHandler();
    
    // private final ReentrantLock lock = new ReentrantLock();

    public void run(){

        try {
            prepare();
            server = ServerSocketChannel.open();
            server.configureBlocking(false);
            server.bind(new InetSocketAddress(host, port));
            logger.info("Server started running");
            

            while (true) {
                SocketChannel client = server.accept();
                if (client != null){
                    client.configureBlocking(false);
                    logger.info("Accepted connection from " + client.getRemoteAddress());
                    readPool.submit(() -> processClient(client));
                }
            }            
        } catch (IOException e) {
            e.printStackTrace();
        }        
    }
    
    private void prepare() {
        logger.info("Preparation has started");
        commandManager = new CommandManager();
        commandManager.buildCommands();
        logger.info("Iniitialised commandManager");
        JdbcProvider.establishConnection(); 
        logger.info("Connection to database is establised");
        JdbcProvider.initializeDatabase();
        JdbcProvider.loadCollectionToMemory();
        logger.info("Database is initalised and loaded to memory");
        IdManager.getInstance().reloadIds(CollectionManager.getInstance().getCollection());
        Thread inputThread = new Thread(() -> {
            while (true) {
                processInput();
            }
            });
        inputThread.start();
        logger.info("Started processing input");
        logger.info("Session is initialised");
    }

    private void processClient(SocketChannel client) {
            while (client.isOpen()) {
                // logger.info("before read request in processing client block");
                Request request = null;
            Future<Request> futureRequest = readPool.submit(() -> readRequest(client));

                try {
                    // request = readRequest(client);
                    request = futureRequest.get();
                } catch (InterruptedException | ExecutionException e) {
                    e.printStackTrace();
                }
                // logger.info("after reading request in processing client block");
                if (request == null) {
                    try {
						logger.warn("client" + client.getRemoteAddress() + "has disconnected");
					} catch (IOException e) {
						// logger.info("IOException during client disconnecting: " + e.getMessage());
					}
                    break;
                }
                final Request finalRequest = request;
                processingPool.submit(() -> {
                    //try {
                        // logger.info("before processing request in processing client block");
                        CommandResult response = processRequest(finalRequest);
                        // logger.info("after processing request in processing client block");
                        writePool.submit(() -> {
                            try {
                                sendResponse(client, response);
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        });
                    // }
                    //  catch (IOException e) {
                        // e.printStackTrace();
                    // }
                });
            }
    }
    

    private Request readRequest(SocketChannel clientSocket) throws InterruptedException, ExecutionException {
        // return writePool.submit(() -> {
            // logger.info("in reading method");
            ByteBuffer sizeBuffer = ByteBuffer.allocate(Integer.BYTES);
            try {
                // Чтение размера данных
                while (sizeBuffer.hasRemaining()) {
                    int bytesRead = clientSocket.read(sizeBuffer);
                    if (bytesRead == -1) {
                        throw new IOException("Client disconnected");
                        // logger.error("Connection closed prematurely");
                        // closeSocket(clientSocket);
                        // return null;
                    }
                }
                sizeBuffer.flip();
                int dataSize = sizeBuffer.getInt();
        
                // Чтение данных заданного размера
                ByteBuffer dataBuffer = ByteBuffer.allocate(dataSize);
                while (dataBuffer.hasRemaining()) {
                    int bytesRead = clientSocket.read(dataBuffer);
                    if (bytesRead == -1) {
                        throw new IOException("Client disconnected");
                        // logger.error("Connection closed prematurely");
                        // closeSocket(clientSocket);
                        // return null;
                    }
                }
                dataBuffer.flip();
        
                byte[] objToSerialize = new byte[dataSize];
                dataBuffer.get(objToSerialize);
        
                try (ByteArrayInputStream bais = new ByteArrayInputStream(objToSerialize);
                     ObjectInputStream ois = new ObjectInputStream(bais)) {
                        // logger.info("returning ois.readObject");
                        logger.info("read request from " + clientSocket.socket().getInetAddress());
                    return (Request) ois.readObject();
                } catch (ClassNotFoundException e) {
                    logger.error("Class not found exception from client while reading request " +
                                 clientSocket.socket().getInetAddress() + ", info: " + e.getMessage());
                    return null;
                }
        
            } catch (IOException e) {
                logger.error("IO exception from client while reading request from" +
                clientSocket.socket().getInetAddress() + ", info: " + e.getMessage());
                closeSocket(clientSocket);
                return null;
            }
        // }).get();
    }
    
    private void closeSocket(SocketChannel clientSocket) {
        try {
            clientSocket.close();
        } catch (IOException e) {
            logger.error("Failed to close socket: " + e.getMessage());
        }
    }
    
    
    private CommandResult processRequest(Request request) {
        // logger.info("in processRequest method");
        return processRequestLogic(request);
    }

    private CommandResult processRequestLogic(Request request) {
        CommandResult response;
        // logger.info("processing request started");
        //System.out.println("req data 0 element " + request.getCommandAndArgs()[0]);

        if (request.getCommandAndArgs()[0].equals("AuthenticateRequest")) {
            // System.out.println("auth if");
            if (JdbcProvider.userIsRegistered(request.getUser().getUsername())) {
                // System.out.println("login if");
                if (JdbcProvider.checkUserPassword(request.getUser())) {
                    // System.out.println("pswd if");
                    response = new CommandResult(true, null, "Authentication");
                    return response;
                } else {
                    // System.out.println("else pswd");
                    response = new CommandResult(false, "Incorrect password", "Authentication");
                    return response;
                }
            } else {
                // System.out.println("else login");
                response = new CommandResult(false, "No user found with such name", "Authentication");
                return response;
            }
        }

        else if (request.getCommandAndArgs()[0].equals("RegistrateRequest")) {
            // System.out.println("reg if");
            if (!JdbcProvider.userIsRegistered(request.getUser().getUsername())) {
                // System.out.println("not registrated if");
                response = new CommandResult(true, null, "Registration");

                JdbcProvider.registerUser(request.getUser());
                // logger.info("user " + request.getUser().getUsername() + " registered");
                return response;
            } else {
                // System.out.println("else registrated");
                response = new CommandResult(false, "This username is not available", "Registration");
                return response;
            }
        }
        else{
            // try {
                // logger.info("before requestHandler.processRequest");
                // response = requestHandler.processRequest(request);
                // logger.info("after requestHandler processRequest");
                // return response;

                // String commandFromRequest = request.getCommandAndArgs()[0];
                // logger.info("command from request: " + commandFromRequest);
                return commandManager.executeCommand(request);
            // }
            // catch (IOException e) {
                // logger.error("IO exception during processing request: " + e.getMessage());
                // return new CommandResult(false, "Internal server error", "Processing");
            // }
        }
    }


    public void sendResponse(SocketChannel clientSocket, CommandResult response) throws IOException {
        // logger.info("in send response ");
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try (ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream)) {
            objectOutputStream.writeObject(response);
            objectOutputStream.flush();
        }
        // logger.info("oos flushed");
        byte[] data = byteArrayOutputStream.toByteArray();
        ByteBuffer sizeBuffer = ByteBuffer.allocate(Integer.BYTES);
        sizeBuffer.putInt(data.length);
        sizeBuffer.flip();
        // logger.info("before writing to clientSocket sizeBuffer");
        clientSocket.write(sizeBuffer);
        // logger.info("after writing to clientSocket sizeBuffer");
        // Отправляем размер данных
        ByteBuffer dataBuffer = ByteBuffer.wrap(data);
        while (dataBuffer.hasRemaining()) {
            // logger.info("in sending response while loop");
                clientSocket.write(dataBuffer);
            }  // Отправляем сами данные
            logger.info("Response sent to " + clientSocket.getRemoteAddress());
        }

    // private void writeResponse(SocketChannel client, CommandResult response) throws IOException {
    //     writePool.submit(() -> {
    //         try {
    //             logger.info("before sending response in processing client block");
    //             // Synchronize writing to the client socket
    //             // lock.lock();
    //             // try {
    //             //     sendResponse(client, response);
    //             // } finally {
    //             //     lock.unlock();
    //             // }
    //             sendResponse(client, response);
    //             logger.info("after sent response in processing client block");
    //         } catch (Exception e) {
    //             e.printStackTrace();
    //         }
    //     });
    // }

    private void processInput() {
        try {
            InputHandler inputHandler = new InputHandler();
            String[] serverInputArray = inputHandler.readByBytes();
            String serverInput = serverInputArray == null ? null : serverInputArray[0];
            Request serverRequest = new Request(serverInputArray, null, null);
            if (serverInput == null){
                return;
            }
            switch (serverInput) {
                case "exit":
                    logger.info("INPUT: exit");
                    // CommandResult exitResult = commandManager.executeCommand(serverInputArray);
                    // logger.info(exitResult);
                    // commandManager.executeCommand(serverInputArray);
                    Exit exit = new Exit(null, null);
                    exit.execute(serverRequest);
                    return;
                default:
                    logger.info("INPUT: " + serverInput);
                    System.out.println("There are only \"save\" and \"exit\" commands available");
                    return;
            }
        } catch (IOException e) {
            logger.info("IOException in inputThread: " + e.getMessage());
        }
        
    }
}