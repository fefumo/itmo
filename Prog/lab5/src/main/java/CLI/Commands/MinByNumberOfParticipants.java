package CLI.Commands;

import java.util.Iterator;

import CLI.Managers.CollectionManager;
import Collection.MusicBand.MusicBand;
import Exceptions.EmptyCollectionException;

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
    public void execute(String[] args) {
        if (args.length != 1)
            throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null || manager.getCollection().isEmpty())
            throw new EmptyCollectionException("There has to be a collection with elements. Try \\\"add\\\" command");

        MusicBand mb;
        Iterator<MusicBand> iter = manager.getCollection().iterator();
        mb = iter.next();
        while (iter.hasNext()) {
            MusicBand temp = iter.next();
            if (temp.getNumberOfParticipants() < mb.getNumberOfParticipants()) {
                mb = temp;
            }
        }
        System.out.println("Here's band with the lowest number of participants:");
        System.out.println(mb);

    }
}
