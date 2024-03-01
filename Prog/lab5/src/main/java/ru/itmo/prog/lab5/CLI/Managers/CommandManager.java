package ru.itmo.prog.lab5.CLI.Managers;

import ru.itmo.prog.lab5.CLI.Commands.*;

import ru.itmo.prog.lab5.Exceptions.InvalidCommandException;

public class CommandManager {

    public void executeCommand(String st) throws InvalidCommandException{
        History.addCommandToHistory(st);
        try {
            switch(st){
                case "help":
                    Help.execute();
                    break;
                case "exit":
                    Exit.execute();
                    break;
                case "add":
                    Add.execute();
                    break;
                case "clear":
                    Clear.execute();
                    break;
                case "history":
                    History.execute();
                    break;
                case "info":
                    Info.exeucte();
                    break;
                case "update_id":
                    UpdateId.execute();
                    break;
                case "remove_by_id":
                    RemoveById.execute();
                    break;
                
                default:
                    throw new InvalidCommandException("No such command. Try again");
            }
            
    
        } catch (InvalidCommandException e) {
            System.out.println(e);
        }
    }
}

