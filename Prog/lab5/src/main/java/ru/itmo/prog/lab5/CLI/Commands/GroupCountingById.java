package ru.itmo.prog.lab5.CLI.Commands;

import java.util.Iterator;
import java.util.NoSuchElementException;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

/**
 * The `GroupCountingById` class extends a Command class and implements a method
 * to count the number of
 * music bands in a collection with an ID lower than a specified ID.
 */
public class GroupCountingById extends Command {

    public GroupCountingById(String name, String descr) {
        super(name, descr);
    }

    /**
     * This Java function checks the number of MusicBand objects in a collection
     * that have a lower
     * compareTo value than a specified MusicBand object based on its ID.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 2)
            throw new ArrayIndexOutOfBoundsException("There has to be 1 argument (type: long)");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \\\"add\\\" command");

        // INPUT!!!!!
        MusicBand musicBand;
        int numberOfBands = 0;
        try {
            long id = Long.parseLong(args[1]);
            if (manager.getCollectionById(id) != null) {
                musicBand = manager.getCollectionById(id);
                Iterator<MusicBand> iter = manager.getCollection().iterator();
                while (iter.hasNext()) {
                    MusicBand musicBandToCompare = iter.next();
                    if (musicBandToCompare.compareTo(musicBand) < 0) {
                        numberOfBands++;
                    }
                }
                if (id == 1 || id == 0) {
                    System.out.println("There is " + numberOfBands + "that is lower than " + musicBand.getName());
                } else {
                    System.out.println("There are " + numberOfBands + "that are lower than " + musicBand.getName());
                }
            }
        } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
            System.out.println("There has to be an argument (int) provided");
        } catch (NoSuchElementException e) {
            System.out.println(e);
        }
    }

}
