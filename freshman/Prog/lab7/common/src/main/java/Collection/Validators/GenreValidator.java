package Collection.Validators;

import Collection.CollectionObject.MusicGenre;

/**
 * The Genre validator.
 */
public class GenreValidator implements Validator<MusicGenre> {
    /**
     * Validate boolean.
     *
     * @param value
     * @return the result of validation which is true if the value is not null
     */
    @Override
    public boolean validate(MusicGenre value) {
        return value != null;
    }
}
