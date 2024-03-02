package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public class Exit extends Command{
    
    public Exit(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        System.out.println("Goodbye, have a nice day!");
        InputHandler.inputScanner.close();
        System.exit(0);
    }

}
