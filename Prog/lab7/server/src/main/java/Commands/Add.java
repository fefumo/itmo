/*
 * deprecated. using analogue on client.
 */

package Commands;


import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
import Exceptions.CommandException;
import Managers.CollectionManager;
import Managers.IdManager;

/**
 * The `Add` class extends `Command` and implements a method to add a
 * `MusicBand` object to a
 * collection based on user input.
 */
public class Add extends Command {

    public Add(String name, String descr) {
        super(name, descr);
    }
    CommandResult commandResult;
    /**
     * This function checks the number of arguments, requests a MusicBand object,
     * and adds it to a
     * collection based on user input.
     */

    @Override
    public CommandResult execute(Request request){
        if (request.getMusicBand() == null){
        }
        MusicBand mb = request.getMusicBand();
        if (JdbcProvider.addMusicBand(mb).isSuccess()){
            CollectionManager collectionManager = CollectionManager.getInstance();
            IdManager idManager = IdManager.getInstance();
            long id = idManager.genereateId();
            mb.setId(id);
            collectionManager.addElementToCollection(mb);
            return new CommandResult(true, null, name);
        }
        throw new CommandException("problem appeared during executing add command");
    }
}