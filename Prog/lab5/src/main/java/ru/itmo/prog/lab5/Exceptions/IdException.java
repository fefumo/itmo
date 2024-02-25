package ru.itmo.prog.lab5.Exceptions;

public class IdException extends RuntimeException{
    private String message;

    public IdException(String message){
        this.message = message;
    }

    public String getMessage(){
        return message;
    }
}
