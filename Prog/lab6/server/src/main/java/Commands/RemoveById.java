package Commands;

import java.util.NoSuchElementException;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;
import Managers.IdManager;

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
    public CommandResult execute(String[] args) {
        CollectionManager manager = CollectionManager.getInstance();
        CommandResult commandResult = new CommandResult(false, null, this.name);
        IdManager idManager = IdManager.getInstance();
        if (args.length != 1)
            throw new CommandException("There has to be 1 argument (type: long)");
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        MusicBand musicBand;

        try {
            long id = Long.parseLong(args[0]);
            musicBand = manager.getCollectionById(id);
            idManager.deleteId(id);
            manager.getCollection().remove(musicBand);
            commandResult = new CommandResult(true, null, this.name,"Band with id " + musicBand.getId() + " has been removed");

        } catch (NoSuchElementException e) {
            throw new CommandException(e.getMessage());
        } catch (NumberFormatException e){
            throw new CommandException("Argument has to be of type long");
        }
        return commandResult;
    }

}