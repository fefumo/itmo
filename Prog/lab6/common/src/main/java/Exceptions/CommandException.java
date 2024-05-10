package Exceptions;

public class CommandException extends RuntimeException{
    public CommandException (String message){
        super(message);
    }
}
