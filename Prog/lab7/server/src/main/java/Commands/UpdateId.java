/*
 * deprecated. Using analogue on client.
 */

package Commands;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import DBRelated.JdbcProvider;
import Exceptions.CommandException;
import Managers.CollectionManager;

/**
 * This Java class defines a command to update the ID of a music band in a
 * collection if the ID is
 * unique.
 */
public class UpdateId extends Command {

    public UpdateId(String name, String descr) {
        super(name, descr);
    }

    /**
     * in lab 6: Updates an element of the collection based on the id that the user provides
     * (in lab 5: updates the id of an element based on the id that the user provides)
     * check client for further info
     */
    @Override
    public CommandResult execute(Request request) {
        if (request.getCommandAndArgs().length != 2)
            throw new CommandException("There has to be 1 argument (type: long)");
        MusicBand musicBandFromRequest = request.getMusicBand();
        Long idFromRequest = Long.parseLong(request.getCommandAndArgs()[1]);
        CollectionManager collectionManager = CollectionManager.getInstance();
        if (JdbcProvider.updateId(request.getUser(), idFromRequest, musicBandFromRequest).isSuccess()){
            for (MusicBand mb : collectionManager.getCollection()){
                if(mb.getId() == idFromRequest && mb.getCreator() == musicBandFromRequest.getCreator()){
                    collectionManager.getCollection().remove(mb);
                    collectionManager.addElementToCollection(musicBandFromRequest);
                    return new CommandResult(true, null, "Element has been updated");
                }
            }
        }
        return new CommandResult(false, "Check your argument and access rights of band you want to change", name);
    }
}
