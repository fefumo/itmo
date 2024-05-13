package Commands;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;

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
     * @return 
     */
    @Override
    public CommandResult execute(String[] args) {
        if (args.length != 1)
            throw new CommandException("There has to be 1 argument (type: long)");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        // INPUT!!!!!
        MusicBand musicBand;
        int numberOfBands = 0;
        musicBand = manager.getCollectionById(Long.parseLong(args[0]));
        if (musicBand != null) {
            numberOfBands = (int) manager.getCollection().stream()
                                                        .filter(musicBandToCompare -> musicBandToCompare.compareTo(musicBand) < 0)
                                                        .count();
        }
        else{
            return new CommandResult(false, "No such musicBand", this.name);
        }
        return new CommandResult(true, null, this.name, "there are(is) " + numberOfBands + "band(s) that are(is) lower than " + musicBand.getName());
        // try {
        //     long id = Long.parseLong(args[0]);
        //     if (manager.getCollectionById(id) != null) {
        //         musicBand = manager.getCollectionById(id);
        //         Iterator<MusicBand> iter = manager.getCollection().iterator();
        //         while (iter.hasNext()) {
        //             MusicBand musicBandToCompare = iter.next();
        //             if (musicBandToCompare.compareTo(musicBand) < 0) {
        //                 numberOfBands++;
        //             }
        //         }
        //         if (numberOfBands== 1 || numberOfBands == 0) {
        //             return new CommandResult(true, null, this.name, "There is " + numberOfBands + " that is lower than " + musicBand.getName());
        //         } else {
        //             return new CommandResult(true, null, this.name, "There are " + numberOfBands + " that are lower than " + musicBand.getName());
        //         }
        //     }
        // } catch (Exception e) {
        //     return new CommandResult(false, e.getMessage(), this.name);
        // }
        // return new CommandResult(false, null, this.getName());
    }

}
