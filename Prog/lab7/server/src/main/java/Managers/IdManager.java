package Managers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;

public class IdManager {
    private Set<Long> idSet = new HashSet<>();
    private static IdManager singleton;
    private static long currentId = 0;

    public static IdManager getInstance(){
        if (singleton == null){
            singleton = new IdManager();
        }
        return singleton;
    }    
    /*
     * при создании нового объекта musicBand метод generateId
     * idSet это множество, где хранятся доступные id, которые попадают туда при удалении объекта из коллекции.
     */
    public long genereateId(){
            long newId;
            if (!idSet.isEmpty()) {
                newId = idSet.iterator().next();
                idSet.remove(newId);
            } else {
                currentId++;
                newId = currentId;
            }
            return newId;
    } 

    public void deleteId(long id){
        idSet.add(id);
    }

    public CommandResult reloadIds(PriorityQueue<MusicBand> collection){
        if (collection == null){
            return new CommandResult(true, null, "reloadIds");
        }
        if (idSet.isEmpty()){
            for (MusicBand mb: collection){
                if (mb.getId() > IdManager.currentId){
                    IdManager.currentId = mb.getId();
                }
            }
        }
        return new CommandResult(true, null, "reloadIds");
    }
	public Set<Long> getIdSet() {
		return idSet;
	}
    public void setNextId(long currentId) {
        IdManager.currentId = currentId;
    }

    @SuppressWarnings("unchecked")
    public void loadIdSetFromFile() {
        File file = new File("./server/src/main/resources/Ids.dat");
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))) {
            idSet = (Set<Long>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            idSet = new HashSet<>();
        }
    }

    public void saveIdSetToFile() {
        File file = new File("./server/src/main/resources/Ids.dat");
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file))) {
            oos.writeObject(idSet);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
