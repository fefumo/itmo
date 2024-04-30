package CLI.Commands;

import java.util.NoSuchElementException;

import CLI.Managers.CollectionManager;
import Collection.MusicBand.MusicBand;
import Exceptions.EmptyCollectionException;

/**
 * The `RemoveById` class extends a command class and implements a method to
 * remove a music band from a
 * collection by ID.
 */
public class RemoveById extends Command {

    public RemoveById(String name, String descr) {
        super(name, descr);
    }

    /**
     * The `execute` method checks for the correct number of arguments, retrieves a
     * music band by ID
     * from a collection, removes it, and handles exceptions.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 2)
            throw new ArrayIndexOutOfBoundsException("There has to be 1 argument (type: long)");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \\\"add\\\" command");

        MusicBand musicBand;

        try {
            long id = Long.parseLong(args[1]);
            if (manager.getCollectionById(id) != null) {
                musicBand = manager.getCollectionById(id);
                manager.getPreviousIds().remove(musicBand.getId());
                manager.getCollection().remove(musicBand);
                System.out.println("--------------------------");
                System.out.println("Band with id " + musicBand.getId() + " has been removed");
            }
        } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
            System.out.println("There has to be an argument (int) provided");
        } catch (NoSuchElementException e) {
            System.out.println(e);
        }
    }

}