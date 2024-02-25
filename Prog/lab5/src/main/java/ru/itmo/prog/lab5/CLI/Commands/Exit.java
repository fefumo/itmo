package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public class Exit {
    public static void execute(){
        System.out.println("Goodbye, have a nice day!");
        InputHandler.inputScanner.close();
        System.exit(0);
    }
}
