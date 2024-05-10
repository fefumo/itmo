import java.io.IOException;
import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import Managers.CollectionManager;
import Managers.CommandManager;

public class RequestHandler {
    CommandManager commandManager;
    CommandResult commandResult;
    private boolean flagForUpdateCommand = false; //indicates whether to delete prev MB when we are adding a new one
    private MusicBand mb = null;

    public RequestHandler(CommandManager commandManager){
        this.commandManager = commandManager;
    }

    public CommandResult processRequest(Request request) throws IOException{
        String commandFromRequest = request.getCommandAndArgs()[0];
        CollectionManager collectionManager = CollectionManager.getInstance();

        switch (commandFromRequest) {
            case "add":
                if (flagForUpdateCommand == true){
                    collectionManager.getCollection().remove(mb);
                    flagForUpdateCommand = false;
                }
                if (request.getMusicBand() == null){
                    commandResult = new CommandResult(false, "MusicBand is null", commandFromRequest);
                    break;
                }
                collectionManager.addElementToCollection(request.getMusicBand());
                System.out.println("--------------------------\nNew element has been added"); // в logger
                commandResult = new CommandResult(true, null, commandFromRequest, "--------------------------\nNew element has been added\n");
                break;
            case "update_id":
                try {
                    Long id;
                    String idString = request.getCommandAndArgs()[1];
                    id = Long.parseLong(idString);
                    mb = collectionManager.getBandById(id);
                    if (mb == null){
                        commandResult = new CommandResult(false, "There is no such element", commandFromRequest);
                        break;
                    }
                    else{
                        commandResult = new CommandResult(true, null, commandFromRequest, "--------------------------\nThere is such element. You can start updating it's values\n");
                        flagForUpdateCommand = true;
                        break;
                    }
                } catch (NumberFormatException e) {
                    commandResult = new CommandResult(false, "Argument has to be of type long", commandFromRequest);
                    break;
                } catch (ArrayIndexOutOfBoundsException e){
                    commandResult = new CommandResult(false, "No argument of type long provided", commandFromRequest);
                    break;
                }
            default:
                commandResult = commandManager.executeCommand(request.getCommandAndArgs());
                break;
        }

        return commandResult;
    }

}
