package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.IdManager;

public class UpdateId {

    public static void execute(){
        IdManager.updateCollectionId();
    }
}
