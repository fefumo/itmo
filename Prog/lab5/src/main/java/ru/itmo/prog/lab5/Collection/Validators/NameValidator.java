package ru.itmo.prog.lab5.Collection.Validators;

/**
 * The Name validator.
 */
public class NameValidator implements Validator<String> {
    /**
     * Validate boolean.
     *
     * @param value
     * @return the result of validation which is true if the value is not null
     */
    @Override
    public boolean validate(String value) {
        return value != null;
    }
}
