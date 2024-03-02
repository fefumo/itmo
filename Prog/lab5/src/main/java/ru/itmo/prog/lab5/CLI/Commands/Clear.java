package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;

public class Clear extends Command {
    
    public Clear(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();

        if (manager.getCollection().isEmpty()) throw new RuntimeException("Collection is empty");
        manager.getCollection().clear();
        System.out.println();
        System.out.println("--------------------------");
        System.out.println("Collection has been cleared");
    }
}
