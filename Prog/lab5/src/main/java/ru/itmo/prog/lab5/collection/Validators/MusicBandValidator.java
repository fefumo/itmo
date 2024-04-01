package ru.itmo.prog.lab5.collection.Validators;

import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class MusicBandValidator implements Validator<MusicBand> {

public boolean validate(MusicBand value) {
    CoordinatesValidator coordinatesValidator = new CoordinatesValidator();
    AlbumsValidator albumsValidator = new AlbumsValidator();
    GenreValidator genreValidator = new GenreValidator();
    LabelValidator labelValidator = new LabelValidator();
    if (Long.valueOf(value.getId()) != null &&
        value.getName() != null && !value.getName().strip().isEmpty() &&
        coordinatesValidator.validate(value.getCoordinates()) &&
        Integer.valueOf(value.getNumberOfParticipants()) != null && value.getNumberOfParticipants() > 0 &&
        albumsValidator.validate(value.getAlbumsCount()) &&
        genreValidator.validate(value.getGenre()) &&
        labelValidator.validate(value.getLabel())
        ){
        return true;
    }
    return false;
};
}
