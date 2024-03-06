package ru.itmo.prog.lab5.collection.Validators;

public class AlbumsValidator implements Validator<Long> {
    @Override
    public boolean validate(Long value) {
        if (value == null){
            return true;
        }
        return value > 0;
    }
}
