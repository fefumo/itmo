package Commands;

import java.util.stream.Collectors;

import Communication.CommandResult;
import Communication.Request;
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
    public CommandResult execute(Request request) {
        String out = "";
        if (request.getCommandAndArgs().length != 1)
            throw new CommandException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        out = manager.getCollection()
                    .stream()
                    .sorted()
                    .map(Object::toString)
                    .collect(Collectors.joining("\n--------------------------\n"));
                    
        return new CommandResult(true, null, this.name, out);
    }
}
