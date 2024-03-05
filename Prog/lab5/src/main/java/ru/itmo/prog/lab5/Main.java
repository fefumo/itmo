package ru.itmo.prog.lab5;


import ru.itmo.prog.lab5.CLI.Managers.CommandManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.EmptyLineException;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello! This is a program for working with music band collections.  \nType \"help\" for more info.");
        CommandManager commandManager = new CommandManager();
        commandManager.buildCommands();
        InputHandler inputHandler = InputHandler.getInstance();

        while (true) {
            try {
                commandManager.executeCommand(inputHandler.getInput());                   
            } catch (EmptyLineException e) {
                System.out.println(e.getMessage());
            } 
        }
    }
}

