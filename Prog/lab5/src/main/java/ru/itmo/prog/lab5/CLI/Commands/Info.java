package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
public class Info extends Command {
    public Info(String name, String descr) {
        super(name, descr);
    }

    @Override
    public  void execute(String[] args){
            System.out.println("-Collection of type: " + CollectionManager.getMusicBandsClass()
                                + "\n-Number of elements: "  + CollectionManager.getCollectionNumberOfElements()
                                + "\n-Created at: " + CollectionManager.getInitilizationDate());
    }

}
