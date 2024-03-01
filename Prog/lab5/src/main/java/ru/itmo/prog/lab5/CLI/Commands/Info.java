package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class Info {
    public static void exeucte(){
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
