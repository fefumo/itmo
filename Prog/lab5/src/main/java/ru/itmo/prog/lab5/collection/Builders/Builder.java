package ru.itmo.prog.lab5.collection.Builders;

/**
 * Functional generic interface for building Objects of any type.
 */
public interface Builder<T> {
    T build();
}