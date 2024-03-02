package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CommandManager;

public class Help extends Command{
    
    public Help(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        System.out.println("here is the list of available commands: ");
        for (String key: CommandManager.getCommandsHashMap().keySet()){
            System.out.println(" -" + key + ": " + CommandManager.getCommandsHashMap().get(key).getDescr()); 
        }
    }

    
}
