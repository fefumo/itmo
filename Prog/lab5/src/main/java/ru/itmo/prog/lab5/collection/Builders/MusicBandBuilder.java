package ru.itmo.prog.lab5.collection.Builders;

import java.util.Date;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.collection.MusicBand.Coordinates;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class MusicBandBuilder implements Builder<MusicBand> {
    static long id = 1;
    
    @Override
    public MusicBand build(){
        if (!CollectionManager.previousIds.isEmpty()){
            for (long i = 1; i <= CollectionManager.previousIds.size(); i++){
                if (!CollectionManager.previousIds.contains(i)){
                    id = i;
                    break;
                }
                else{
                    id = CollectionManager.previousIds.size() + 1;
                }
            }    
        }

        CollectionManager.previousIds.add(id);
        final Date creationDate = new Date();
        Coordinates coordinates = null;
        MusicBand new_Band = new MusicBand(id, null, coordinates, creationDate, 0, null, null, null, null);
        return new_Band;
    }

}
