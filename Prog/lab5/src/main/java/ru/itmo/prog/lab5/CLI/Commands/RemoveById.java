package ru.itmo.prog.lab5.CLI.Commands;

import java.util.NoSuchElementException;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class RemoveById extends Command{
    
    public RemoveById(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        if (args.length != 2) throw new ArrayIndexOutOfBoundsException("There has to be 1 argument (type: long)");
        CollectionManager manager = CollectionManager.getInstance();
        if (manager.getCollection() == null) throw new EmptyCollectionException("There has to be a collection with elements. Try \\\"add\\\" command");
        
        MusicBand musicBand; 

        try {
            long id = Long.parseLong(args[1]);
            if(manager.getCollectionById(id) != null){
                musicBand = manager.getCollectionById(id);
                manager.getPreviousIds().remove(musicBand.getId());
                manager.getCollection().remove(musicBand);
                System.out.println("--------------------------");
                System.out.println("Band with id " + musicBand.getId() + " has been removed");    
            }
        } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
            System.out.println("There has to be an argument (int) provided");
        }
        catch (NoSuchElementException e){
            System.out.println(e);
        }
    }

}