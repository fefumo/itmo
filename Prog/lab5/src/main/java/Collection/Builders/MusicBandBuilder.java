package Collection.Builders;

import java.util.Date;

import CLI.Managers.CollectionManager;
import Collection.MusicBand.Coordinates;
import Collection.MusicBand.MusicBand;

/**
 * The type Music band builder.
 *
 * @see Builder
 */
public class MusicBandBuilder implements Builder<MusicBand> {
    /**
     * The Id.
     */
    static long id = 1;

    /**
     * The Manager.
     */
    CollectionManager manager = CollectionManager.getInstance();

    /**
     * Build music band.
     *
     * @return the music band
     */
    @Override
    public MusicBand build() {
        checkForEmptySlot();
        manager.getPreviousIds().add(id);
        final Date creationDate = new Date();
        Coordinates coordinates = null;
        MusicBand new_Band = new MusicBand(id, null, coordinates, creationDate, 0, null, null, null, null);
        return new_Band;
    }

    private void checkForEmptySlot() {
        if (!(manager.getPreviousIds().isEmpty())) {
            for (long i = 1; i <= manager.getPreviousIds().size(); i++) {
                if (!(manager.getPreviousIds().contains(i))) {
                    id = i;
                    break;
                } else {
                    id = manager.getPreviousIds().size() + 1;
                }
            }
        }
    }

}
