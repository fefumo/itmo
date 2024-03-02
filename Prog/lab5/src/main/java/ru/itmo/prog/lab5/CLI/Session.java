package ru.itmo.prog.lab5.CLI;

import ru.itmo.prog.lab5.CLI.Managers.CommandManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.EmptyLineException;


public class Session {
    
    public void start(){
        System.out.println("Hello! This is a program for working with music band collections.  \nType \"help\" for more info.");
        CommandManager commandManager = new CommandManager();
        commandManager.buildCommands();

        while (true) {
            try {
                commandManager.executeCommand(InputHandler.getInput());                   
            } catch (EmptyLineException e) {
                System.out.println(e);
            } catch (Exception e){
                System.out.println(e);
            }
        }
    }
}