package ru.itmo.prog.lab5.collection.Validators;

public interface Validator<T> {
    boolean validate(T value);
}
