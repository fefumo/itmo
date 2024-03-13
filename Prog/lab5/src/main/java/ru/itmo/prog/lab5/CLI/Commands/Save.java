package ru.itmo.prog.lab5.CLI.Commands;

public class Save extends Command{

    public Save(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args) {
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        
    }
    
}
