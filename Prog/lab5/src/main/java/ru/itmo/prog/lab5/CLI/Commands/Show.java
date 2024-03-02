package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class Show extends Command {
    public Show(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        if (CollectionManager.musicBands.isEmpty()){
            System.out.println("Collection has no elements.");
        }
        else{
            for (MusicBand item: CollectionManager.musicBands){
                System.out.println(item);
                System.out.println();
            }    
        }
    }
}
