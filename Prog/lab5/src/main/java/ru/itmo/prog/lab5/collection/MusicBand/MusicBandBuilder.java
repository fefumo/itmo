package ru.itmo.prog.lab5.collection.MusicBand;

import java.util.Date;

import ru.itmo.prog.lab5.CLI.Managers.IdManager;
import ru.itmo.prog.lab5.Exceptions.IdException;
import ru.itmo.prog.lab5.collection.Builders.Builder;

public class MusicBandBuilder implements Builder<MusicBand> {
    static long id = 0;
    
    @Override
    public MusicBand build() throws IdException{
        id++;
        IdManager idManager = new IdManager();
        final Date creationDate = new Date();
        Coordinates coordinates = null;
        MusicBand new_Band = new MusicBand(id, null, coordinates, creationDate, 0, null, null, null, null);
        idManager.putId(id, new_Band);
        id++;
        return new_Band;
    }

}
