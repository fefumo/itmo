package ru.itmo.prog.lab5.CLI.Commands;

import java.util.Iterator;
import java.util.NoSuchElementException;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

/**
 * The `RemoveLower` class in Java defines a command that removes a `MusicBand`
 * object from a
 * collection based on a specified ID while handling exceptions and avoiding
 * `ConcurrentModificationException`.
 */
public class RemoveLower extends Command {
    public RemoveLower(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function removes a MusicBand object from a collection based on a
     * specified ID,
     * handling exceptions and ensuring safe removal to avoid
     * ConcurrentModificationException.
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
                Iterator<MusicBand> iter = manager.getCollection().iterator();
                while (iter.hasNext()) {
                    MusicBand musicBandToDelete = iter.next();
                    if (musicBandToDelete.compareTo(musicBand) < 0) {
                        manager.getPreviousIds().remove(musicBandToDelete.getId());
                        // THIS IS SO IMPORTANT NOT TO GET ConcurrentModificationException here!!!!!!!!!
                        // manager.getCollection().remove(musicBandToDelete.getId()) WILL RESOLVE IN AN
                        // EXCEPTION!
                        iter.remove();
                        System.out.println();
                        System.out.println("--------------------------");
                        System.out.println("Band with id " + musicBandToDelete.getId() + " has been removed");

                    }
                }
            }
        } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
            System.out.println("There has to be an argument (int) provided");
        } catch (NoSuchElementException e) {
            System.out.println(e);
        }
    }
}
