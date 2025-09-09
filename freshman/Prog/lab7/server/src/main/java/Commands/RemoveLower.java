package Commands;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;
import Communication.Request;
import Communication.User;
import DBRelated.JdbcProvider;
import Exceptions.CommandException;
import Exceptions.EmptyCollectionException;
import Managers.CollectionManager;
import Managers.IdManager;

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
    public CommandResult execute(Request request) {
        CollectionManager manager = CollectionManager.getInstance();
        CommandResult commandResult = new CommandResult(false, "command did not execute", "check access rights of bands you are trying to delete");
        IdManager idManager = IdManager.getInstance();

        if (request.getCommandAndArgs().length != 2)
            throw new CommandException("There has to be 1 argument (type: long)");
        if (manager.getCollection() == null)
            throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");
        
        try {
            long id = Long.parseLong(request.getCommandAndArgs()[1]);
            if (JdbcProvider.removeLower(request.getUser(), id).isSuccess()){
                User requestUser = request.getUser();
                List<Long> idList = manager.getCollection().stream()
                        .filter(mb -> mb.getId() < id && mb.getCreator().equals(requestUser.getUsername()))
                        .map(MusicBand::getId)
                        .collect(Collectors.toList());
                        
                boolean flag = idList.isEmpty();
                        
                idList.forEach(idManager::deleteId);
                idList.forEach(idToDelete -> manager.getCollection().remove(manager.getBandById(idToDelete)));
                        
                if (flag) {
                    commandResult = new CommandResult(true, null, this.name, "There is no band which id is less than the provided one and created by the user.");
                } else {
                    commandResult = new CommandResult(true, null, this.name, "Band(s) with id(s) " + idList + " has(have) been removed");
                }
            }
        } catch (NumberFormatException e) {
            throw new CommandException("There has to be an argument (int) provided");
        } catch (NoSuchElementException e) {
            throw new CommandException(e.getMessage());
        }
        
        return commandResult;
    }
}
