package Commands;


import Communication.CommandResult;
import Exceptions.CommandException;
import Managers.CollectionManager;
import Managers.IdManager;

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
    public CommandResult execute(String[] args) {
        CollectionManager manager = CollectionManager.getInstance();
        IdManager idManager = IdManager.getInstance();
        if (args.length != 0){
            throw new CommandException("There has to be no arguments");
        }        
        if (manager.getCollection().isEmpty()){
            return new CommandResult(false, "Collection is empty", this.getName());
        }
        manager.getCollection().clear();
        idManager.getIdSet().clear();
        idManager.setNextId(0);
        return new CommandResult(true, null, this.getName(), "Collection has been cleared");
    }
}
