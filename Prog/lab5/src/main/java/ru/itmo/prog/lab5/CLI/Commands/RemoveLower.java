package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class RemoveLower extends Command{
    public RemoveLower(String name, String descr) {
        super(name, descr);
    }


    @Override
    public void execute(String[] args) {
        MusicBand musicBand; 
        if (CollectionManager.previousIds.isEmpty()){
            System.out.println("Fail: Collection is empty - cannot do anything to it \nReturning to starting screen...");
        }
        String name = "";
        for (int i = 1; i < args.length; i++){
            name += args[i];
        }
        String  userInput = name;
        if (CollectionManager.getBandByName(userInput) != null){
            musicBand = CollectionManager.getBandByName(userInput);
            for (MusicBand mb : CollectionManager.musicBands){
                if (mb.compareTo(musicBand) < 0){
                    CollectionManager.musicBands.remove(mb);
                    CollectionManager.previousIds.remove(musicBand.getId());
                    System.out.println();
                    System.out.println("--------------------------");
                    System.out.println("Band " + musicBand.getName() + " has been removed");
                }
            }
        }
    }
}
