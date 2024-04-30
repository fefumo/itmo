package CLI.Commands;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayDeque;
import java.util.NoSuchElementException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import CLI.Managers.InputHandler;

/**
 * The `ExecuteScript` class in Java executes a script file while checking for
 * recursion in the script
 * content.
 */
public class ExecuteScript extends Command {

    public ExecuteScript(String name, String descr) {
        super(name, descr);
    }

    /**
     * The function executes a script based on the input file path provided as a
     * command line argument,
     * handling exceptions related to file access and recursion detection.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 2)
            throw new ArrayIndexOutOfBoundsException("There has to be 1 argument - path to file ");
        InputHandler inputHandler = InputHandler.getInstance();

        try {
            String userInput = args[1].trim();
            if (checkRecursion(Path.of(userInput), new ArrayDeque<>())) {
                System.out.println("There is a recursion found in the script.");
                return;
            }
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Executing script...");

            File file = new File(userInput);
            inputHandler.setflagOfUserMode(false);
            inputHandler.setInputFromFile(file);

        } catch (IOException e) {
            System.out.println("Something is wrong with the file. Try again.");
        } catch (SecurityException e) {
            System.out.println("Access to the file is denied.");
        } catch (NoSuchElementException e) {
            System.out.println("EOF. Returning to user-mode.");
            inputHandler.setflagOfUserMode(true);
        }
    }

    /**
     * The function `checkRecursion` recursively checks for execution script
     * recursion in a given path
     * using a stack to track visited paths.
     * 
     * @param path  The `path` parameter in the `checkRecursion` method represents a
     *              specific file path that
     *              is being checked for recursion.
     * @param stack The `stack` parameter is an `ArrayDeque` that stores `Path`
     *              objects. It is used to keep
     *              track of the paths that have been visited during the recursion
     *              to detect any cycles or loops in the
     *              paths being processed.
     * @return The method `checkRecursion` returns a boolean value - `true` if
     *         recursion is detected in the
     *         given `Path` object and `false` otherwise.
     */
    private boolean checkRecursion(Path path, ArrayDeque<Path> stack) throws IOException {
        if (stack.contains(path))
            return true;
        stack.addLast(path);
        String str = Files.readString(path);
        Pattern pattern = Pattern.compile("execute_script .*");
        Matcher patternMatcher = pattern.matcher(str);
        while (patternMatcher.find()) {
            Path newPath = Path.of(patternMatcher.group().split(" ")[1]);
            if (checkRecursion(newPath, stack))
                return true;
        }
        stack.removeLast();
        return false;
    }

}
