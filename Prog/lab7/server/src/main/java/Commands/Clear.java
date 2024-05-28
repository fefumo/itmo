package Commands;


import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
import Exceptions.CommandException;
import Managers.CollectionManager;

/**
 * The `Clear` class extends `Command` and provides a method to clear the
 * collection managed by
 * `CollectionManager`.
 */
public class Clear extends Command {
    public Clear(String name, String descr) {
        super(name, descr);
    }
    
    /**
     * This function clears the collection managed by CollectionManager if it is not
     * empty and throws
     * exceptions if the arguments are not as expected.
     */
    @Override
    public CommandResult execute(Request request) {
        // CollectionManager manager = CollectionManager.getInstance();
        if (JdbcProvider.clearMusicBand(request.getUser()).isSuccess()){
            var collection = CollectionManager.getInstance().getCollection();
            collection.removeIf(mb -> mb.getCreator().equals(request.getUser().getUsername()));
            return new CommandResult(true, null, name);
        }
        throw new CommandException("problem appeared during executing clear command");
        // IdManager idManager = IdManager.getInstance();
        // if (request.getCommandAndArgs().length != 1){
            // throw new CommandException("There has to be no arguments");
        // }        
        // if (manager.getCollection().isEmpty()){
            // return new CommandResult(false, "Collection is empty", this.getName());
        // }
        // manager.getCollection().clear();
        // idManager.getIdSet().clear();
        // idManager.setNextId(0);
        // return new CommandResult(true, null, this.getName(), "Collection has been cleared");
    }
}
