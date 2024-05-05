package Exceptions;

public class EmptyCollectionException extends RuntimeException {
    private String message;

    public EmptyCollectionException(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
