package ru.itmo.prog.lab5.Collection.Validators;

/**
 * The Albums validator
 *
 * @see Validator
 */
public class AlbumsValidator implements Validator<Long> {
    /**
     * Validate boolean.
     *
     * @param value
     * @return the result of validation which is true if the value is bigger than zero and not null
     */
    @Override
    public boolean validate(Long value) {
        if (value == null) {
            return true;
        }
        return value > 0;
    }
}
