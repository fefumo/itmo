package ru.itmo.prog.lab5.CLI.Managers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.NoSuchElementException;
import java.util.PriorityQueue;

import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class CollectionManager {
    public static PriorityQueue<MusicBand> musicBands = new PriorityQueue<MusicBand>();
    private static LocalDateTime InitilizationDate = LocalDateTime.now();
    public static ArrayList<Long> previousIds = new ArrayList<Long>();
    private static MusicBand musicBand;

    @SuppressWarnings("unchecked")
    public static Class<? extends PriorityQueue<MusicBand>> getMusicBandsClass() {
        return (Class<? extends PriorityQueue<MusicBand>>) musicBands.getClass();
    }

    public static LocalDateTime getInitilizationDate() {
        return InitilizationDate;
    }
    public static int getCollectionNumberOfElements(){
        int numberOfElements = 0;
        for (int i = 0; i < musicBands.size(); i ++){
            numberOfElements += 1;
        }
        return numberOfElements;
    }
    public static MusicBand getBandById(long id){
        for (MusicBand band : musicBands){
            if (band.getId() == id){
                return band;
            }
        }
        return null;
    }

    public static boolean collectionHasId(long idForInput) throws NoSuchElementException{
        if (previousIds.contains(idForInput)){
            return true;
        }
        else{
            throw new NoSuchElementException("There is no such id. Try again");
        }
    }

    public static void setCollectionId(long id) { 
        musicBand = getBandById(id);
        musicBand.setId(id);
        previousIds.add(id);
        System.out.println();
        System.out.println("");
        System.out.println("--------------------------");
        System.out.println(musicBand.getName() + "'s id has been set." );
    }

    public static MusicBand getBandByName(String name){
        for (MusicBand band : musicBands){
            if (band.getName() == name){
                return band;
            }
        }
        return null;
    }
    public static MusicBand getBandByNumberOfParticipants(int n){
        for (MusicBand band : musicBands){
            if (band.getNumberOfParticipants() == n){
                return band;
            }
        }
        return null;
    }
    
}
