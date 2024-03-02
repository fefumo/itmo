package ru.itmo.prog.lab5.CLI.Commands;

public class ExecuteScript extends Command{
    
    public ExecuteScript(String name, String descr) {
        super(name, descr);
    }
    
    @Override
    public void execute(String[] args){
        if (args.length != 2) throw new ArrayIndexOutOfBoundsException("There has to be 1 argument");
    }

}
