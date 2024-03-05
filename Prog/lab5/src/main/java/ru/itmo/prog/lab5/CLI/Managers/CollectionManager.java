package ru.itmo.prog.lab5.CLI.Managers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.PriorityQueue;


import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;

public class CollectionManager {

    //for multithreading and preventing problems with iterating over a modified queue
    //i made a singleton instance of collectionmanager to contact with collection

    private static CollectionManager singletonPattern; 
    private  PriorityQueue<MusicBand> musicBandsQueue;
    private final static LocalDateTime InitilizationDate = LocalDateTime.now();
    private ArrayList<Long> previousIds = new ArrayList<Long>();

    public static CollectionManager getInstance(){
        if (singletonPattern == null){
            singletonPattern = new CollectionManager();
        }
        return singletonPattern;
    }
    public PriorityQueue<MusicBand> getCollection(){
        return musicBandsQueue;
    }
    public void setCollection(PriorityQueue<MusicBand> pq){
        this.musicBandsQueue = pq;
    }

    public LocalDateTime getCollectionInitilizationDate() {
        return InitilizationDate;
    }

    public MusicBand getBandById(long id){
        CollectionManager manager = CollectionManager.getInstance();
        for (MusicBand band : manager.getCollection()){
            if (band.getId() == id){
                return band;
            }
        }
        return null;
    }
    public ArrayList<Long> getPreviousIds() {
        return previousIds;
    }
    public void addElementToCollection(MusicBand value){
        CollectionManager manager = CollectionManager.getInstance();
        if (musicBandsQueue == null){
            PriorityQueue<MusicBand> musicBands = new PriorityQueue<>();
            musicBands.add(value);
            manager.setCollection(musicBands);
        }
        else{
            musicBandsQueue.add(value);
        }
        System.out.println();
        System.out.println("--------------------------");
        System.out.println("New Music Band has been added to the colleciton.");
    }

    public MusicBand getCollectionById(long id) throws NoSuchElementException{
        MusicBand mb = null;
        Iterator<MusicBand> iter = musicBandsQueue.iterator();
        while (iter.hasNext()){
            MusicBand temp = iter.next();
            if (temp.getId() == id){
                mb = temp;
                break;
            }
        }
        if (mb == null){
            throw new NoSuchElementException("There is no such element. Try again");
        }
        return mb;
    }
    
}
