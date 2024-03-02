package ru.itmo.prog.lab5.CLI.Commands;

public abstract interface CommandInterface {
    void execute(String[] args);
    String getDescr();
    String getName();
}
