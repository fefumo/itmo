package ru.itmo.prog.lab5;

import java.util.NoSuchElementException;

import ru.itmo.prog.lab5.CLI.Managers.CommandManager;
import ru.itmo.prog.lab5.CLI.Managers.DumpManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public class Main {

    public static void main(String[] args) {
        // preparing block
        CommandManager commandManager = new CommandManager();
        commandManager.buildCommands();
        InputHandler inputHandler = InputHandler.getInstance();
        DumpManager dumpManager = DumpManager.getInstance();
        String path = System.getenv("FILE_PATH");
        if (path == null || path.isBlank()) {
            System.out.println(
                    "No environment variable is set. Please set it with \"export FILE_PATH=\"path_to_collection.xml\"\"");
            System.exit(1);
        }

        System.out.println(
                "Hello! This is a program for working with music band collections.  \nType \"help\" for more info.");

        dumpManager.unmarshalAndSetCollectionFromXML(path);

        // actual program block

        while (true) {
            try {
                commandManager.executeCommand(inputHandler.getInput());
            } catch (NoSuchElementException e) {
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("EOF or ctrl+d has been reached. Returning to user-mode...");
                System.out.println();
                inputHandler.setUserInput();
            }
        }
    }
}
