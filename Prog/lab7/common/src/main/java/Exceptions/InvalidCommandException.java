package Exceptions;

public class InvalidCommandException extends CommandException {
    public InvalidCommandException(String message) {
        super(message);
    }
}
