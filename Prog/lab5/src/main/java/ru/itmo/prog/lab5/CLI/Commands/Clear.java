package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;

public class Clear extends Command {
    
    public Clear(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){
        CollectionManager.musicBands.clear();
    }
}
