package ru.itmo.prog.lab5.CLI.Managers;

import java.util.ArrayList;

import ru.itmo.prog.lab5.Exceptions.IdException;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class IdManager {
    
    static ArrayList<Long> previousIds = new ArrayList<Long>();

    // public boolean checkId(Long number){
    //     if (previousIds.contains(number)){
    //         return false;
    //     }
    //     else{
    //         return true;
    //     }
    // }
    
    public void putId(Long id, MusicBand musicBand) throws IdException{
        if(previousIds.contains(id)){
            throw new IdException("This id already exists. Try another.");
        }
        else{
            musicBand.setId(id);
            previousIds.add(id);
        }
    }
}
