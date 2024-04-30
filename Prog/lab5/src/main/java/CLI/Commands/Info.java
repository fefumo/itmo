package CLI.Commands;

import CLI.Managers.CollectionManager;
import Exceptions.EmptyCollectionException;

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
    public void execute(String[] args) {
        if (args.length != 1)
            throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        System.out.println("   -Collection of type: " + manager.getCollection().getClass().toString()
                + "\n   -Number of elements: " + manager.getCollection().size()
                + "\n   -Created at: " + manager.getCollectionInitilizationDate());
    }

}
