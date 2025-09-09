package Commands;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

import Communication.CommandResult;
import Communication.Request;
import Exceptions.CommandException;

/**
 * The `History` class in Java represents a command history feature that stores
 * and displays a limited
 * number of previously executed commands.
 */
public class History extends Command {
    private static int headIndex = -1;
    private static int tailIndex = -1;
    private static final int HISTORY_SIZE = 14;
    final static String[] commandHistory = new String[HISTORY_SIZE];

    public History(String name, String descr) {
        super(name, descr);
    }

    /**
     * The `addCommandToHistory` function adds a command to a circular buffer
     * history with a fixed
     * size.
     * 
     * @param st The parameter `st` in the `addCommandToHistory` method represents
     *           the command string
     *           that you want to add to the command history. This method is used to
     *           add a command to a circular
     *           buffer that stores a history of commands with a fixed size defined
     *           by `HISTORY_SIZE`.
     */
    public static synchronized void addCommandToHistory(String st) {
        if (headIndex == -1) {
            headIndex = 0;
            tailIndex = 0;
            commandHistory[headIndex] = st;
        } else {
            tailIndex = (tailIndex + 1) % HISTORY_SIZE;
            commandHistory[tailIndex] = st;
            if (tailIndex == headIndex) {
                headIndex = (headIndex + 1) % HISTORY_SIZE;
            }
        }
    }

    /**
     * This function prints out the history command list stored in an array,
     * handling the case where
     * there are no commands in history.
     */
    @Override
    public CommandResult execute(Request request) {
        String out = "";
        if (request.getCommandAndArgs().length != 1)
            throw new CommandException("There has to be no arguments");

        out = out.concat("\nHere is your history command list: \n----------------------------------\n");
        // if (headIndex == -1) {
        //     return new CommandResult(true, null, this.name, "No commands in history");
        // } else {
        //     int i = headIndex;
        //     int count = 1;

        //     do {
        //         out = out.concat(count + ": " + commandHistory[i] + "\n");
        //         i = (i + 1) % HISTORY_SIZE;
        //         count++;
        //     } while (i != tailIndex + 1);
        // }
        if (headIndex != -1) {
            out = IntStream.iterate(headIndex, i -> (i + 1) % HISTORY_SIZE)
                    .limit(tailIndex >= headIndex ? tailIndex - headIndex + 1 : HISTORY_SIZE)
                    .mapToObj(i -> (i + 1) + ": " + commandHistory[i])
                    .collect(Collectors.joining("\n"));
        }
        else{
            return new CommandResult(true, null, this.name, "No commands in history");
        }
        return new CommandResult(true, null, this.name, out);
    }

}
