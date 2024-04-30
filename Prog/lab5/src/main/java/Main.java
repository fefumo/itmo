import java.util.NoSuchElementException;

import CLI.Managers.CommandManager;
import CLI.Managers.DumpManager;
import CLI.Managers.InputHandler;

/**
 * The main class of the application that starts the program
 */
public class Main {

    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
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
        
        dumpManager.unmarshalAndSetCollectionFromXML(path);
        System.out.println(
                "Hello! This is a program for working with music band collections.  \nType \"help\" for more info.");


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
