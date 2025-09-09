package Builders;

import java.util.Date;

import Collection.CollectionObject.Coordinates;
import Collection.CollectionObject.MusicBand;

/**
 * The type Music band builder.
 *
 * @see Builder
 */
public class MusicBandBuilder implements Builder<MusicBand> {
    private static MusicBandBuilder singleton;

    public static MusicBandBuilder getInstance(){
        if (singleton == null) return new MusicBandBuilder();
        else return singleton;
    }

    /**
     * Build music band.
     *
     * @return the music band
     */
    @Override
    public MusicBand build() {
        final Date creationDate = new Date();
        Coordinates coordinates = null;
        MusicBand new_Band = new MusicBand(-1, null, coordinates, creationDate, 0, null, null, null, null);
        return new_Band;
    }

}
