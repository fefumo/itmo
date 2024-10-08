package CLI.Managers;

import java.util.HashMap;

import CLI.Commands.Add;
import CLI.Commands.Clear;
import CLI.Commands.Command;
import CLI.Commands.ExecuteScript;
import CLI.Commands.Exit;
import CLI.Commands.GroupCountingById;
import CLI.Commands.Help;
import CLI.Commands.History;
import CLI.Commands.Info;
import CLI.Commands.MinByNumberOfParticipants;
import CLI.Commands.RemoveById;
import CLI.Commands.RemoveLower;
import CLI.Commands.Save;
import CLI.Commands.Show;
import CLI.Commands.UpdateId;
import Exceptions.EmptyCollectionException;
import Exceptions.InvalidCommandException;

/**
 * The `CommandManager` class in Java manages a collection of commands and
 * executes them based on user
 * input.
 */
public class CommandManager {

    public static HashMap<String, Command> commands = new HashMap<>();

    /**
     * The `buildCommands` function initializes and adds various command objects to
     * a map for a
     * command-line interface.
     */
    public void buildCommands() {

        Help help = new Help("help", "display help on available commands");
        Info info = new Info("info",
                "Print information about the collection (type, initialization date, number of elements, etc.) to the standard output stream.");
        Show show = new Show("show",
                "print to standard output all the elements of the collection in string representation");
        Add add = new Add("add", "add {element} add a new element to the collection");
        UpdateId updateId = new UpdateId("update_id",
                "update_id {id} update the value of a collection element whose id is equal to the given one");
        RemoveById removeById = new RemoveById("remove_by_id",
                "remove_by_id {id} remove an element from a collection by its id");
        Clear clear = new Clear("clear", "clear collection");
        Save save = new Save("save", "save the collection to a file");
        ExecuteScript executeScript = new ExecuteScript("execute_script",
                "execute_script {file_name} read and execute a script from the specified file. The script contains commands in the same form in which the user enters them interactively.");
        Exit exit = new Exit("exit", "end the program (without saving to a file)");
        RemoveLower removeLower = new RemoveLower("remove_lower",
                "remove_lower {element} remove all elements from the collection that are smaller than the given one");
        History history = new History("history", "display the last 14 executed commands");
        MinByNumberOfParticipants minByNumberOfParticipants = new MinByNumberOfParticipants(
                "min_by_number_of_participants",
                "display an object from a collection whose numberOfParticipants field value is minimal");
        GroupCountingById groupCountingById = new GroupCountingById("group_counting_by_id",
                "display the number of elements whose id field value is less than the specified one");

        commands.put(help.getName(), help);
        commands.put(info.getName(), info);
        commands.put(show.getName(), show);
        commands.put(add.getName(), add);
        commands.put(updateId.getName(), updateId);
        commands.put(removeById.getName(), removeById);
        commands.put(clear.getName(), clear);
        commands.put(save.getName(), save);
        commands.put(executeScript.getName(), executeScript);
        commands.put(exit.getName(), exit);
        commands.put(removeLower.getName(), removeLower);
        commands.put(history.getName(), history);
        commands.put(minByNumberOfParticipants.getName(), minByNumberOfParticipants);
        commands.put(groupCountingById.getName(), groupCountingById);
    }

    /**
     * The `executeCommand` function in Java processes a given command, adds it to
     * history, and
     * executes the corresponding command if it exists in a map of commands,
     * handling exceptions
     * appropriately.
     * 
     * @param command The `executeCommand` method takes a command as a parameter,
     *                which is a string
     *                representing the command to be executed. The command can
     *                include the command name and any
     *                arguments separated by spaces. The method first checks if the
     *                command is null and prints a
     *                message if it is. It then splits the command
     */
    public void executeCommand(String command) {
        if (command == null) {
            System.out.println("Null passed. No command will be executed.");
            return;
        }
        String[] commandAndArgs = command.split(" ", 2);
        History.addCommandToHistory(command);
        try {
            if (!(commands.containsKey(commandAndArgs[0]))) {
                throw new InvalidCommandException("No such command. Try again");
            }
            commands.get(commandAndArgs[0]).execute(commandAndArgs);

        } catch (InvalidCommandException | ArrayIndexOutOfBoundsException | EmptyCollectionException e) {
            System.out.println(e.getMessage());
        }
    }

    /**
     * The function returns a HashMap containing String keys and Command values.
     * 
     * @return A HashMap<String, Command> named "commands" is being returned.
     */
    public static HashMap<String, Command> getCommandsHashMap() {
        return commands;
    }
}
