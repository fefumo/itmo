package ru.itmo.prog.lab5.CLI.Managers;

import java.util.ArrayList;

import ru.itmo.prog.lab5.Exceptions.IdException;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;
    /*
     * 1. ввод id. по нему обращаемся к коллекции
     * 1.2 обращаюсь к коллекции, у неё ищу такой элемент, укоторого id равен заданному.
     * 2. запрос на ввод нового id. 
     * 3. изменяем id коллекции, если такого не существует. иначе -- ошикба
     */

public class IdManager {
    
    public static ArrayList<Long> previousIds = new ArrayList<Long>();
    static long idToRemove;
    static long musicBandId; //changes during validating id for input. not sure if its correct, but it works...
    static MusicBand musicBand;

    public static void updateCollectionId(){
        if (previousIds.isEmpty()){
            System.out.println("Fail: Collection is empty - cannot do anything to it \nReturning to starting screen...");
        }
        else{
            while(true){
                System.out.println("Type the id number of band you want to change");
                try {
                    long userInput = InputHandler.getLongInput();     
                    if (IdManager.checkIdForInput(userInput)){
                        System.out.println("id has been accepted");
                        break;
                    }               
                } catch (Exception e) {
                    System.out.println(e);
                    return;
                }
            }
    
            while (true){
                System.out.println("Now type id number you want to change to");
                try {
                    long userInput = InputHandler.getLongInput();
                    if (IdManager.checkIdForUpdate(userInput)){
                        previousIds.remove(idToRemove);
                        IdManager.setCollectionId(userInput);
                        System.out.println();
                        System.out.println("--------------------------");
                        System.out.println(musicBand.getName() + "'s id has been updated");
                        break;
                    }
                } catch (Exception e) {
                    System.out.println(e);
                }
            }    
        }
    }    
    

    public static void removeCollectionById(){
        if (previousIds.isEmpty()){
            System.out.println("Fail: Collection is empty - cannot do anything to it \nReturning to starting screen...");
        }
        else{
            while(true){
                System.out.println("Type the id number of band you want to remove");
                try {
                    long userInput = InputHandler.getLongInput();     
                    if (IdManager.checkIdForInput(userInput)){
                        previousIds.remove(idToRemove);
                        CollectionManager.musicBands.remove(musicBand);
                        System.out.println();
                        System.out.println("--------------------------");
                        System.out.println("Band has been removed");
                        break;
                    }               
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        }
    }

    //public static void 

    //set id and put it in previous Ids
    public static void setCollectionId(long id) { 
        musicBand.setId(id);
        previousIds.add(id);
    }

    //check if the id is in the previousIds array so that we will not use existing ids. 
    public static boolean checkIdForUpdate(long idForUpdate){
        if(!previousIds.contains(idForUpdate)){
            return true;
        }
        else{
            System.out.println("This id is already being used. Try another one.");
            return false;
        }
    }
    //check if the id is in the previousIds array 
    public static boolean checkIdForInput(long number){
        if(previousIds.contains(number)){
            IdManager.idToRemove = number;
            musicBandId = number;
            musicBand = CollectionManager.getBandById(musicBandId); // changing musicBand for set\remove collectionById
            return true;
        }
        else{
            throw new IdException("There is no such collection. Try again");
        }
    }
}
