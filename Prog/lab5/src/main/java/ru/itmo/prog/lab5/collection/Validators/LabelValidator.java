package ru.itmo.prog.lab5.collection.Validators;

import ru.itmo.prog.lab5.collection.MusicBand.Label;

public class LabelValidator implements Validator<Label> {

    @Override
    public boolean validate(Label value) {
        if (value.getBands() == null){
            return false;
        }
        return true;
    }
    
}
