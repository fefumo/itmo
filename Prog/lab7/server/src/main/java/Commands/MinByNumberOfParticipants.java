package Commands;

import java.util.Comparator;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;

/**
 * This Java class extends Command and implements a function to find and print
 * the music band with the
 * lowest number of participants in a collection.
 */
public class MinByNumberOfParticipants extends Command {

    public MinByNumberOfParticipants(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function finds and prints the music band with the lowest number of
     * participants in a
     * collection.
     */
    @Override
    public CommandResult execute(Request request) {
        if (request.getCommandAndArgs().length != 1)
            throw new CommandException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \\\"add\\\" command");

        MusicBand mb = manager.getCollection().stream()
                                .min(Comparator.comparing(MusicBand::getNumberOfParticipants))
                                .orElse(null);

        return new CommandResult(true, null, this.name, "Band with the lowest number of participants: " + mb);
    }
}
