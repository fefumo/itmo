package ru.itmo.prog.lab5.collection.Validators;

/**
 * The generic functional abstract interface Validator.
 *
 * @param <T> the type parameter
 */
public interface Validator<T> {
    /**
     * Validate boolean.
     *
     * @param value
     * @return boolean result of validation
     */
    boolean validate(T value);
}
