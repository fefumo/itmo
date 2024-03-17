package ru.itmo.prog.lab5.CLI.Commands;

// This code snippet defines a Java interface named `CommandInterface`. The interface declares three
// abstract methods:
// 1. `void execute(String[] args);` - This method is used to execute a command with the given
// arguments.
// 2. `String getDescr();` - This method is used to retrieve a description of the command.
// 3. `String getName();` - This method is used to retrieve the name of the command.
public abstract interface CommandInterface {
    void execute(String[] args);

    String getDescr();

    String getName();
}
