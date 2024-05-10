package Commands;

import java.util.Arrays;

import Communication.CommandResult;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;

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
    public CommandResult execute(String[] args) {
        String out = "";
        if (args.length != 0)
            throw new CommandException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        Object[] sortedCollection = manager.getCollection().toArray();
        Arrays.sort(sortedCollection);

        for (Object element : sortedCollection) {
            out = out.concat("\n--------------------------\n");
            out = out.concat(element.toString() + "\n");
        }
        return new CommandResult(true, null, this.name, out);
    }
}
