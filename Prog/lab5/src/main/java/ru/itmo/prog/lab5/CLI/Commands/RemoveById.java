package ru.itmo.prog.lab5.CLI.Commands;

import java.util.NoSuchElementException;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class RemoveById extends Command{
    
    public RemoveById(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        MusicBand musicBand; 
        try {
            long id = Long.parseLong(args[1]);
            if (CollectionManager.collectionHasId(id)){
                musicBand = CollectionManager.getBandById(id);
                CollectionManager.previousIds.remove(id);
                CollectionManager.musicBands.remove(musicBand);
                System.out.println();
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