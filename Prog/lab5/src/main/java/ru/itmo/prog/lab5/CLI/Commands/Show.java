package ru.itmo.prog.lab5.CLI.Commands;

import java.util.Arrays;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;

public class Show extends Command {
    public Show(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager  = CollectionManager.getInstance();
        if (manager.getCollection() == null) throw new EmptyCollectionException("There has to be a collection with elements. Try \"add\" command");

        Object [] sortedCollection = manager.getCollection().toArray();
        Arrays.sort(sortedCollection);

        for(Object element : sortedCollection){
            System.out.println("--------------------------");
            System.out.println(element.toString());
        }
    }
}
