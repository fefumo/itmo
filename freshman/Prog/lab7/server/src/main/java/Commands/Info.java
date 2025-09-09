package Commands;

import Communication.CommandResult;
import Communication.Request;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;

/**
 * The Info class extends Command and provides a method to check and print
 * information about a
 * collection.
 */
public class Info extends Command {
    public Info(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function checks if there is exactly one argument, ensures there is a
     * non-empty collection,
     * and then prints information about the collection.
     */
    @Override
    public CommandResult execute(Request request) {
        CollectionManager manager = CollectionManager.getInstance();
        String out = "";        
        if (request.getCommandAndArgs().length != 1)
            throw new CommandException("There has to be no arguments");
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        out += ("\nnumber of bands: " + CollectionManager.getInstance().getCollection().size()
        + "\nType: " + CollectionManager.getInstance().getCollection().getClass()
        + "\nCreationDate: " + CollectionManager.getInstance().getCollectionInitilizationDate());                    
        
        return new CommandResult(true, null, this.name, out);
    }
}
