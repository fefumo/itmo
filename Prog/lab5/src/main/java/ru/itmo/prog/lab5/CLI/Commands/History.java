package ru.itmo.prog.lab5.CLI.Commands;

public class History extends Command{
    private static int headIndex = -1;
    private static int tailIndex = -1;
    private static final int HISTORY_SIZE = 14;
    final static String[] commandHistory = new String[HISTORY_SIZE];

    public History(String name, String descr) {
        super(name, descr);
    }

    public static void addCommandToHistory(String st){
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
    @Override
    public void execute(String[] args){
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
