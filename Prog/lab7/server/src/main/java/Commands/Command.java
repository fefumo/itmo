package Commands;

import Communication.CommandResult;
import Communication.Request;

/**
 * The abstract class Command defines properties and methods for a command
 * object in Java.
 */
public abstract class Command {
    String name;
    String descr;
    Object argument;

    public Command(String name, String descr) {
        this.name = name;
        this.descr = descr;
    }

    public String getDescr() {
        return descr;
    }

    public String getName() {
        return name;
    }

    public abstract CommandResult execute(Request request);

    public Object getArgument() {
        return argument;
    }
}
