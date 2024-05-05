import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;

import CLI.Managers.CollectionManager;
import CLI.Managers.CommandManager;
import Communication.Request;
import Communication.Response;

public class RequestHandler {
    CommandManager commandManager;
    byte[] commandOutput;

    public RequestHandler(CommandManager commandManager){
        this.commandManager = commandManager;
    }

    public Response processRequest(Request request) throws IOException{
        String commandFromRequest = request.getCommand();
        CollectionManager collectionManager = CollectionManager.getInstance();

        if (commandFromRequest.equals("add")){
            //System.out.println(request.getMusicBand());
            collectionManager.addElementToCollection(request.getMusicBand());
            commandOutput = "--------------------------\n New element has been added".getBytes();
        }
        else{
            ByteArrayOutputStream serverOutputStream = new ByteArrayOutputStream();
            PrintStream printStream = new PrintStream(serverOutputStream);
            System.setOut(printStream);
            commandManager.executeCommand(commandFromRequest);
            printStream.flush();
            printStream.close();
            commandOutput = serverOutputStream.toByteArray();
            System.setOut(System.out);
        }

        Response response = new Response(commandOutput);
        return response;
    }

}
