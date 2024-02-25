package ru.itmo.prog.lab5.CLI.Managers;

import ru.itmo.prog.lab5.CLI.Commands.*;
import ru.itmo.prog.lab5.Exceptions.IncorrectInputException;

public class CommandManager {

    public void executeCommand(String st) throws IncorrectInputException{
        History.addCommandToHistory(st);

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
            
            default:
                throw new IncorrectInputException("No such command. Try again");
        }
    }
}
