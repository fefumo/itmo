package ru.itmo.prog.lab5.CLI.Commands;


import ru.itmo.prog.lab5.CLI.Managers.IdManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class UpdateId {
    /*
     * 1. ввод idю по нему обращаемся к коллекции
     * 2. запрос на ввод нового id. 
     * 3. изменяем id коллекции, если такого не существует. иначе -- ошикба
     */
    public void execute(MusicBand musicBand){
        IdManager idManager = new IdManager();
        Long userInput = InputHandler.getLongInput();
        
        idManager.putId(userInput, musicBand);
    }
}
