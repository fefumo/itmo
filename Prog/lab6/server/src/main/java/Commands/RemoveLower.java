package Commands;

import java.util.Iterator;
import java.util.NoSuchElementException;

import Collection.IdManager;
import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;

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
     * @return 
     */
    @Override
    public CommandResult execute(String[] args) {
        CollectionManager manager = CollectionManager.getInstance();
        IdManager idManager = IdManager.getInstance();
        MusicBand musicBand;
        boolean flag = true;
        CommandResult commandResult = new CommandResult(false, null, null);

        if (args.length != 1)
            throw new CommandException("There has to be 1 argument (type: long)");
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        try {
            long id = Long.parseLong(args[0]);
            musicBand = manager.getCollectionById(id);
            Iterator<MusicBand> iter = manager.getCollection().iterator();
            while (iter.hasNext()) {
                MusicBand musicBandToDelete = iter.next();
                if (musicBandToDelete.compareTo(musicBand) < 0) {
                    idManager.getIdArray().remove(musicBandToDelete.getId());
                    /*
                    THIS IS SO IMPORTANT NOT TO GET ConcurrentModificationException here!!!!!!!!!
                    manager.getCollection().remove(musicBandToDelete.getId()) WILL RESOLVE IN AN
                    EXCEPTION!
                    */
                    iter.remove();
                    flag = false;
                    commandResult = new CommandResult(true, null, this.name, "\n--------------------------\nBand with id " + musicBandToDelete.getId() + " has been removed");
                }
            }
            if (flag == true){
                commandResult = new CommandResult(true, null, this.name, "\n--------------------------\nThere is no band which id is less than the provided one.");
            }
        } catch (NumberFormatException e) {
            throw new CommandException("There has to be an argument (int) provided");
        } catch (NoSuchElementException e) {
            throw new CommandException(e.getMessage());
        }
        return commandResult;
    }
}
