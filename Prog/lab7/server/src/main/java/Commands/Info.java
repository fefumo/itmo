package Commands;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import Collection.CollectionObject.MusicBand;
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

        List<MusicBand> sortedList = new ArrayList<>(manager.getCollection());
        Collections.sort(sortedList);
        out = sortedList.stream()
                            .collect(StringBuilder::new,
                                        (sb, mb) -> sb.append("   -").append(mb).append("\n"),
                                        StringBuilder::append)
                            .toString();                            
        
        return new CommandResult(true, null, this.name, out);
    }

}
