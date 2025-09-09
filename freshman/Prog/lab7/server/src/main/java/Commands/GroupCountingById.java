package Commands;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
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
    public CommandResult execute(Request request) {
        System.out.println("in executing groupCountingById");
        if (request.getCommandAndArgs().length != 2){
            throw new CommandException("There has to be 1 argument (type: long)");
        }
        if (JdbcProvider.groupCountingById(request.getUser(), Integer.parseInt(request.getCommandAndArgs()[1])).isSuccess()){
            System.out.println("after if of jdbcprovider");
            CollectionManager manager = CollectionManager.getInstance();
            if (manager.getCollection() == null){
                throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");
            }    
            int numberOfBands = 0;
            MusicBand musicBand = manager.getCollectionById(Long.parseLong(request.getCommandAndArgs()[1]));
            if (musicBand == null){
                return new CommandResult(false, "No such musicBand", this.name);
            }
            System.out.println("parsed long and found collection");
            numberOfBands = (int) manager.getCollection().stream()
                                                        .filter(musicBandToCompare -> musicBandToCompare.compareTo(musicBand) < 0 && musicBand.getCreator().equals(request.getUser().getUsername()))
                                                        .count();
            //english moment
            if (numberOfBands == 0){
                return new CommandResult(true, null, this.name, "there are no bands that are lower than" + musicBand.getName());
            }
            else if(numberOfBands == 1){
                return new CommandResult(true, null, this.name, "there is 1 band that is lower than" + musicBand.getName());
            }
            else{
                return new CommandResult(true, null, this.name, "there are " + numberOfBands + "bands that are lower than " + musicBand.getName());
            }
        }
        return new CommandResult(false, "No such musicBand", this.name);
        }        
}
