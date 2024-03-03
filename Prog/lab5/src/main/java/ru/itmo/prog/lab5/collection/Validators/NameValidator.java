package ru.itmo.prog.lab5.collection.Validators;

import java.util.regex.Pattern;

public class NameValidator implements Validator<CharSequence> {
    @Override
    public boolean validate(CharSequence value) {
        return Pattern.matches("^[a-zA-z][a-zA-z0-9_]{2,40}$", value);
    }
}
