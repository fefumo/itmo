import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
import Managers.CommandManager;

public class RequestHandler {
    JdbcProvider jdbcProvider = new JdbcProvider();
    CommandResult commandResult;
    private static Logger logger = LogManager.getLogger(Server.class);


    public CommandResult processRequest(Request request) throws IOException{
        String commandFromRequest = request.getCommandAndArgs()[0];
        // String[] commandAndArgs = request.getCommandAndArgs();
        logger.info("command from request: " + commandFromRequest);
        // CollectionManager collectionManager = CollectionManager.getInstance();
        CommandManager commandManager = new CommandManager();
        // IdManager idManager = IdManager.getInstance();
        // MusicBand mb = request.getMusicBand();
        commandResult = commandManager.executeCommand(request);
        
        // switch (commandFromRequest) {
        //     case "add":
        //         if (mb == null){
        //             commandResult = new CommandResult(false, "MusicBand is null", commandFromRequest);
        //             break;
        //         }
        //         mb.setId(idManager.genereateId());
        //         // System.out.println("before calling jdbc");
        //         collectionManager.addElementToCollection(mb);
        //         logger.info("Add command ended");
        //         break;
        //     case "":
        //     case "groupCountingById":
        //         return commandManager.executeCommand(commandAndArgs);
        //     case "clear":
        //         JdbcProvider.clearMusicBand(request.getUser()); // отправить в executeCommand
        //         return commandManager.executeCommand(commandAndArgs);
        //     case "update_id":
        //         return new CommandResult(false, "cant be rn", commandFromRequest);
        //         // try {
        //         //     Long id;
        //         //     String idString = request.getCommandAndArgs()[1];
        //         //     id = Long.parseLong(idString);
        //         //     musicBandForUpdateCommand = collectionManager.getBandById(id);
        //         //     if (musicBandForUpdateCommand == null){
        //         //         commandResult = new CommandResult(false, "There is no such element", commandFromRequest);
        //         //         break;
        //         //     }
        //         //     else{
        //         //         commandResult = new CommandResult(true, null, commandFromRequest, "--------------------------\nThere is such element. You can start updating it's values\n");
        //         //         flagForUpdateCommand = true;
        //         //         break;
        //         //     }
        //         // } catch (NumberFormatException e) {
        //         //     commandResult = new CommandResult(false, "Argument has to be of type long", commandFromRequest);
        //         //     break;
        //         // } catch (ArrayIndexOutOfBoundsException e){
        //         //     commandResult = new CommandResult(false, "No argument of type long provided", commandFromRequest);
        //         //     break;
        //         // }
        //     default:
        //         commandResult = commandManager.executeCommand(commandAndArgs);
        //         break;
        // }
        
        return commandResult;
    }

}
