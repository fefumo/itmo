package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;
public class Info extends Command {
    public Info(String name, String descr) {
        super(name, descr);
    }

    @Override
    public  void execute(String[] args){
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null) throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");
        
        System.out.println("    -Collection of type: " + manager.getCollection().getClass().toString()
                            + "\n   -Number of elements: "  + manager.getCollection().size()
                            + "\n   -Created at: " + manager.getCollectionInitilizationDate());
    }

}
