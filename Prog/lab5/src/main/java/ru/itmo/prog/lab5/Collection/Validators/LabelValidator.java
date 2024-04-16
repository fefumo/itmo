package ru.itmo.prog.lab5.Collection.Validators;

import ru.itmo.prog.lab5.Collection.MusicBand.Label;

/**
 * The Label validator.
 */
public class LabelValidator implements Validator<Label> {

    /**
     * Validate boolean.
     *
     * @param value
     * @return the result of validation which is true if the value is not null
     */
    @Override
    public boolean validate(Label value) {
        if (value.getBands() == null){
            return false;
        }
        return true;
    }
    
}
