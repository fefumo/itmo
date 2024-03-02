package ru.itmo.prog.lab5.collection.Builders;

import java.util.Date;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.collection.MusicBand.Coordinates;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class MusicBandBuilder implements Builder<MusicBand> {
    static long id = 1;
    
    @Override
    public MusicBand build(){
        CollectionManager manager = CollectionManager.getInstance();
        if (!(manager.getPreviousIds().isEmpty())){
            for (long i = 1; i <= manager.getPreviousIds().size(); i++){
                if (!(manager.getPreviousIds().contains(i))){
                    id = i;
                    break;
                }
                else{
                    id = manager.getPreviousIds().size() + 1;
                }
            }    
        }

        manager.getPreviousIds().add(id);
        final Date creationDate = new Date();
        Coordinates coordinates = null;
        MusicBand new_Band = new MusicBand(id, null, coordinates, creationDate, 0, null, null, null, null);
        return new_Band;
    }

}
