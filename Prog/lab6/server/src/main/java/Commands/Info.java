package Commands;

import Communication.CommandResult;
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
    public CommandResult execute(String[] args) {
        CollectionManager manager = CollectionManager.getInstance();
        String out = "";        
        if (args.length != 0)
            throw new CommandException("There has to be no arguments");
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        out = out.concat("   -Collection of type: " + manager.getCollection().getClass().toString()
                + "\n   -Number of elements: " + manager.getCollection().size()
                + "\n   -Created at: " + manager.getCollectionInitilizationDate());
        
        return new CommandResult(true, null, this.name, out);
    }

}
