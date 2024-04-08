package ru.itmo.prog.lab5.CLI.Commands;

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
    public static void addCommandToHistory(String st) {
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
    public void execute(String[] args) {
        if (args.length != 1)
            throw new ArrayIndexOutOfBoundsException("There has to be no arguments");

        System.out.println("Here is your history command list: \n----------------------------------");
        if (headIndex == -1) {
            System.out.println("No commands in history");
        } else {
            int i = headIndex;
            int count = 1;
            do {
                System.out.println(count + ": " + commandHistory[i]);
                i = (i + 1) % HISTORY_SIZE;
                count++;
            } while (i != tailIndex + 1);
        }
    }

}
