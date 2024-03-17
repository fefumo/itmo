package ru.itmo.prog.lab5;

import java.util.NoSuchElementException;

import ru.itmo.prog.lab5.CLI.Managers.CommandManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public class Main {

    public static void main(String[] args) {
        System.out.println(
                "Hello! This is a program for working with music band collections.  \nType \"help\" for more info.");
        CommandManager commandManager = new CommandManager();
        commandManager.buildCommands();
        InputHandler inputHandler = InputHandler.getInstance();

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
