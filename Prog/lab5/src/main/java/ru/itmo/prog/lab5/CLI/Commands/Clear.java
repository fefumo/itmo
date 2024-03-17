package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;

/**
 * The `Clear` class extends `Command` and provides a method to clear the
 * collection managed by
 * `CollectionManager`.
 */
public class Clear extends Command {

    public Clear(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function clears the collection managed by CollectionManager if it is not
     * empty and throws
     * exceptions if the arguments are not as expected.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 1)
            throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();

        if (manager.getCollection().isEmpty())
            throw new RuntimeException("Collection is empty");
        manager.getCollection().clear();
        System.out.println();
        System.out.println("--------------------------");
        System.out.println("Collection has been cleared");
    }
}
