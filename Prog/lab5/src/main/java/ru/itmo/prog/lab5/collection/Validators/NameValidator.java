package ru.itmo.prog.lab5.collection.Validators;


public class NameValidator implements Validator<String> {
    @Override
    public boolean validate(String value) {
        return !value.isEmpty() && !value.isBlank() && value != null;
    }
}
