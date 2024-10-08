package CLI.Commands;

import java.util.Arrays;

import CLI.Managers.CollectionManager;
import Exceptions.EmptyCollectionException;

/**
 * The `Show` class extends `Command` and implements a function to sort and
 * print elements of a
 * collection managed by a `CollectionManager` instance.
 */
public class Show extends Command {
    public Show(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function sorts and prints the elements of a collection managed by a
     * CollectionManager
     * instance.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 1)
            throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        Object[] sortedCollection = manager.getCollection().toArray();
        Arrays.sort(sortedCollection);

        for (Object element : sortedCollection) {
            System.out.println("--------------------------");
            System.out.println(element.toString());
        }
    }
}
