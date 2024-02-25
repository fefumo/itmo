package ru.itmo.prog.lab5.CLI;

import ru.itmo.prog.lab5.CLI.Managers.CommandManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public class Session {
    
    public void execute(){
        System.out.println("Hello! This is a program for working with music band collections.  \nType \"help\" for more info.");
        CommandManager commandManager = new CommandManager();

        while (true) {
            try {
                commandManager.executeCommand(InputHandler.getStringInput());                
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}