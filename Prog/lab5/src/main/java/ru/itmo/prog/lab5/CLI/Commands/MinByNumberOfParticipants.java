package ru.itmo.prog.lab5.CLI.Commands;



import java.util.Iterator;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;


public class MinByNumberOfParticipants extends Command {

    public MinByNumberOfParticipants(String name, String descr) {
        super(name, descr);
    }
    
    @Override
    public void execute(String[] args) {
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null) throw new EmptyCollectionException("There has to be a collection with elements. Try \\\"add\\\" command");
        
        MusicBand mb;
        Iterator<MusicBand> iter = manager.getCollection().iterator();
        mb = iter.next();
        while(iter.hasNext()){
            MusicBand temp = iter.next();
            if (mb.getNumberOfParticipants() < temp.getNumberOfParticipants()){
                mb = temp;
            }
        }
        System.out.println("Here's band with the lowest number of participants:");
        System.out.println(mb);

    }
}
