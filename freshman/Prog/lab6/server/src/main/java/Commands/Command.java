package Commands;

import Communication.CommandResult;

/**
 * The abstract class Command defines properties and methods for a command
 * object in Java.
 */
public abstract class Command implements CommandInterface {
    String name;
    String descr;
    Object argument;

    public Command(String name, String descr) {
        this.name = name;
        this.descr = descr;
    }

    @Override
    public String getDescr() {
        return descr;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public abstract CommandResult execute(String[] args);

    public Object getArgument() {
        return argument;
    }
}
