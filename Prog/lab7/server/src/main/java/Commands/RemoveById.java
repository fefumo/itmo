package Commands;

import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;
import Managers.IdManager;

/**
 * The `RemoveById` class extends a command class and implements a method to
 * remove a music band from a
 * collection by ID.
 */
public class RemoveById extends Command {

    public RemoveById(String name, String descr) {
        super(name, descr);
    }

    /**
     * The `execute` method checks for the correct number of arguments, retrieves a
     * music band by ID
     * from a collection, removes it, and handles exceptions.
     */
    @Override
    public CommandResult execute(Request request) {
        CollectionManager manager = CollectionManager.getInstance();
        CommandResult commandResult = new CommandResult(false, "Command did not execute", this.name, "Check your access rights of band you are trying to remove");
        IdManager idManager = IdManager.getInstance();
        if (request.getCommandAndArgs().length != 2){
            throw new CommandException("There has to be 1 argument (type: long)");
        }
        if (manager.getCollection() == null){
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");    
        }

        try {
            long id = Long.parseLong(request.getCommandAndArgs()[1]);
            if(JdbcProvider.removeById(request.getUser(), id).isSuccess()){
                if(manager.getCollection().removeIf(musicBand -> musicBand.getId() == id)){
                    idManager.deleteId(id);
                    commandResult = new CommandResult(true, null, this.name,"Band with id " + id + " has been removed");
                 } else {
                     throw new CommandException("No band with specified id found");
                 }                     
            }
        } catch (NumberFormatException e){
           throw new CommandException("Argument has to be of type long");
        } catch (CommandException e){
            commandResult =  new CommandResult(false, e.getMessage(), name);
        }
        return commandResult;
    }

}