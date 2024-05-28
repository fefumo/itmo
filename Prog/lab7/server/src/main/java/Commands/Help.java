package Commands;

import java.util.stream.Collectors;

import Communication.CommandResult;
import Communication.Request;
import Exceptions.CommandException;
import Managers.CommandManager;

/**
 * The Help class extends Command and provides a method to print a list of
 * available commands with
 * their descriptions when executed with exactly one argument.
 */
public class Help extends Command {

    public Help(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function checks if there is exactly one argument provided and then
     * prints a list of
     * available commands with their descriptions.
     */
    @Override
    public CommandResult execute(Request request) {
        String out = "";
        if (request.getCommandAndArgs().length != 1)
            throw new CommandException("There has to be no arguments");
        out = out.concat("\nhere is the list of available commands: \n");
        out = CommandManager.getCommandsHashMap().keySet().stream()
            .map(key -> "  -" + key + ": " + CommandManager.getCommandsHashMap().get(key).getDescr())
            .collect(Collectors.joining("\n"));
        return new CommandResult(true, null, this.name, out);
    }

}
