package ru.itmo.prog.lab5.CLI.Managers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.PriorityQueue;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlElementWrapper;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlTransient;
import ru.itmo.prog.lab5.Collection.MusicBand.MusicBand;

/**
 * The `CollectionManager` class in Java represents a singleton manager for a
 * collection of `MusicBand`
 * objects with methods for adding, retrieving, and managing the collection.
 */
@XmlRootElement(name = "MusicBandCollection")
@XmlAccessorType(XmlAccessType.FIELD)
public class CollectionManager {

    // for multithreading and preventing problems with iterating over a modified
    // queue
    // i made a singleton instance of collectionmanager to contact with collection

    private static CollectionManager singletonPattern;
    @XmlElement(name = "musicBand")
    @XmlElementWrapper(name = "musicBands")
    private PriorityQueue<MusicBand> musicBandsQueue;
    private final static LocalDateTime InitilizationDate = LocalDateTime.now();
    @XmlTransient
    private ArrayList<Long> previousIds = new ArrayList<Long>();

    /**
     * The function getInstance() returns an instance of CollectionManager using the
     * singleton pattern.
     * 
     * @return The `CollectionManager` instance is being returned.
     */
    public static CollectionManager getInstance() {
        if (singletonPattern == null) {
            singletonPattern = new CollectionManager();
        }
        return singletonPattern;
    }

    /**
     * The function returns a PriorityQueue containing MusicBand objects.
     * 
     * @return A PriorityQueue containing objects of type MusicBand is being
     *         returned.
     */
    public PriorityQueue<MusicBand> getCollection() {
        return musicBandsQueue;
    }

    /**
     * The function sets a PriorityQueue of MusicBand objects to a class variable.
     * 
     * @param pq The parameter `pq` is a `PriorityQueue` of `MusicBand` objects.
     */
    public void setCollection(PriorityQueue<MusicBand> pq) {
        this.musicBandsQueue = pq;
    }

    /**
     * The function returns the initialization date of a collection as a
     * LocalDateTime object.
     * 
     * @return A LocalDateTime object representing the initialization date of the
     *         collection.
     */
    public LocalDateTime getCollectionInitilizationDate() {
        return InitilizationDate;
    }

    /**
     * This Java function retrieves a MusicBand object from a collection based on a
     * specified ID.
     * 
     * @param id The `id` parameter in the `getBandById` method is a unique
     *           identifier used to search
     *           for a specific `MusicBand` object in the collection. The method
     *           iterates through the collection
     *           of `MusicBand` objects and returns the `MusicBand` object that
     *           matches the provided `id`.
     * @return The `getBandById` method is returning a `MusicBand` object with the
     *         specified `id` if it
     *         exists in the collection managed by the `CollectionManager`. If no
     *         `MusicBand` with the
     *         specified `id` is found, the method returns `null`.
     */
    public MusicBand getBandById(long id) {
        CollectionManager manager = CollectionManager.getInstance();
        for (MusicBand band : manager.getCollection()) {
            if (band.getId() == id) {
                return band;
            }
        }
        return null;
    }

    /**
     * The function `getPreviousIds()` returns an ArrayList of Long values
     * representing previous IDs.
     * 
     * @return An ArrayList of Long values containing the previousIds is being
     *         returned.
     */
    public ArrayList<Long> getPreviousIds() {
        return previousIds;
    }

    /**
     * The `addElementToCollection` method adds a MusicBand object to a
     * PriorityQueue collection.
     * 
     * @param value The `value` parameter in the `addElementToCollection` method
     *              represents a
     *              `MusicBand` object that you want to add to a collection.
     */
    public void addElementToCollection(MusicBand value) {
        CollectionManager manager = CollectionManager.getInstance();
        if (musicBandsQueue == null) {
            PriorityQueue<MusicBand> musicBands = new PriorityQueue<>();
            musicBands.add(value);
            manager.setCollection(musicBands);
        } else {
            musicBandsQueue.add(value);
        }
    }

    /**
     * This Java function retrieves a MusicBand object from a collection by its ID,
     * throwing a
     * NoSuchElementException if the element is not found.
     * 
     * @param id The `id` parameter is a unique identifier used to search for a
     *           specific `MusicBand`
     *           object in the collection. The method `getCollectionById` iterates
     *           through a queue of `MusicBand`
     *           objects to find and return the `MusicBand` object with the matching
     *           `id`. 
     * @return The method `getCollectionById` returns a `MusicBand` object with the
     *         specified ID. If no
     *         `MusicBand` object with the given ID is found in the
     *         `musicBandsQueue`, it throws a
     *         `NoSuchElementException`.
     */
    public MusicBand getCollectionById(long id) throws NoSuchElementException {
        MusicBand mb = null;
        Iterator<MusicBand> iter = musicBandsQueue.iterator();
        while (iter.hasNext()) {
            MusicBand temp = iter.next();
            if (temp.getId() == id) {
                mb = temp;
                break;
            }
        }
        if (mb == null) {
            throw new NoSuchElementException("There is no such element. Try again");
        }
        return mb;
    }

    /**
     * Method that inserts ids of a collection in previousIds. Used at
     * initialization of a program so that future add commands will consider
     * elements' ids from
     * file.
     */
    public void reloadIdArray() {
        for (MusicBand mb : musicBandsQueue) {
            previousIds.add(mb.getId());
        }
    }
}
