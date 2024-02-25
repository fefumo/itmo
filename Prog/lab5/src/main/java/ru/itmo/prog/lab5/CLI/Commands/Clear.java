package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;

public class Clear {
    public static void execute(){
        CollectionManager.clearCollection();
    }
}
