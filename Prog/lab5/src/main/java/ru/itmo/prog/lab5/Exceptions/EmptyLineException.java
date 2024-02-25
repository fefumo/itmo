package ru.itmo.prog.lab5.Exceptions;

public class EmptyLineException extends RuntimeException {
    private String message;

    public EmptyLineException(String message){
        this.message = message;
    }

    public String getMessage(){
        return message;
    }
}
