package Collection.Validators;

import Collection.CollectionObject.Coordinates;

/**
 * The Coordinates validator.
 */
public class CoordinatesValidator implements Validator<Coordinates> {
    /**
     * Validate boolean.
     *
     * @param value the value
     * @return the result of validation which is true if the value is not null
     */
    @Override
    public boolean validate(Coordinates value) {
        return (value != null);
    }
}
