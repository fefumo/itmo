package Exceptions;

public class InvalidCommandException extends RuntimeException {
    private String message;

    public InvalidCommandException(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
