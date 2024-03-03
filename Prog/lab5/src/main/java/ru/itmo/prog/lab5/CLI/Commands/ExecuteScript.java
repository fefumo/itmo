package ru.itmo.prog.lab5.CLI.Commands;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayDeque;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import ru.itmo.prog.lab5.CLI.Managers.CommandManager;
import ru.itmo.prog.lab5.CLI.Managers.DumpManager;

public class ExecuteScript extends Command{
    
    public ExecuteScript(String name, String descr) {
        super(name, descr);
    }
    
    @Override
    public void execute(String[] args){
        if (args.length != 2) throw new ArrayIndexOutOfBoundsException("There has to be 1 argument - path to file ");
        DumpManager dumpManager = DumpManager.getInstance();
        CommandManager commandManager = new CommandManager();

        try {
            String userInput = args[1];
            if (checkRecursion(Path.of(userInput), new ArrayDeque<>())){
                System.out.println("There is a recursion found in the script.");
                return;
            }
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Executing script...");

            String[] data = dumpManager.loadFromFile(Path.of(userInput));
            for (String line : data){
                String[] command = line.split(" ");
                /*
                 * 
                 */
                commandManager.executeCommand(command);
            }

            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Script has been executed.");

        } catch (IOException e) {
            System.out.println(e);
        } catch (SecurityException e ){
            System.out.println("Access to the file is denied.");
        }
    }

    private boolean checkRecursion (Path path, ArrayDeque<Path> stack) throws IOException {
        if (stack.contains(path)) return true;
            stack.addLast(path);
            String str = Files.readString(path);
            Pattern pattern = Pattern.compile("execute_script .*");
            Matcher patternMatcher = pattern.matcher(str);
        while (patternMatcher.find())
        {
            Path newPath = Path.of(patternMatcher.group().split(" ")[1]);
            if(checkRecursion(newPath, stack)) return true;
        }
        stack.removeLast();
        return false;
    }

}
