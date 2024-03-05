package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBandRequester;



public class Add  extends Command{

    public Add(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args) {
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be no arguments");
        CollectionManager manager = CollectionManager.getInstance();
        MusicBandRequester musicBandRequester = new MusicBandRequester();
        InputHandler inputHandler = InputHandler.getInstance();
        if (inputHandler.getflagOfUserMode() == true){
            manager.addElementToCollection(musicBandRequester.requestUserBand());
        }
        else{
            MusicBand musicBand = musicBandRequester.requestNonUserBand();
            if (musicBand != null){
                manager.addElementToCollection(musicBand);
            }
            else{
                System.out.println("MusicBand hasn't been added t the collection.");
            }
        }

    }
}