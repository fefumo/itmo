package ru.itmo.prog.lab5.collection.Validators;

import ru.itmo.prog.lab5.collection.MusicBand.MusicGenre;

public class GenreValidator implements Validator<MusicGenre> {
    @Override
    public boolean validate(MusicGenre value) {
        return value != null;
    }
}
