package ru.itmo.prog.lab5.collection.Validators;

import ru.itmo.prog.lab5.collection.MusicBand.Coordinates;

public class CoordinatesValidator implements Validator<Coordinates> {
    @Override
    public boolean validate(Coordinates value) {
        return (value != null);
    }
}
