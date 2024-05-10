package Collection;

import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.Random;

import Collection.CollectionObject.MusicBand;
import Communication.CommandResult;

public class IdManager {
    private static ArrayList<Long> idArray = new ArrayList<Long>();
    private static IdManager singleton;

    public static IdManager getInstance(){
        if (singleton == null) return new IdManager();
        else return singleton;
    }
    /*
     * когда создаётся новый объект, мы создаём новый id в idManager 
     * и добавляем его в arraylist
     * когда коллекция загружается из файла, то мы просто вызываем reloadIds()
     * 
     */
    public long genereateId(){
        Random random = new Random();
        Long randomNumber = random.nextLong();
        randomNumber = randomNumber < 0 ? randomNumber * (-1) : randomNumber;
        while(idArray.contains(randomNumber)){
            randomNumber = random.nextLong();
        }
        return randomNumber;
    } 

    public CommandResult reloadIds(PriorityQueue<MusicBand> collection){
        if (collection == null){
            return new CommandResult(true, null, "reloadIds");
        }
        for (MusicBand mb: collection){
            idArray.add(mb.getId());
        }
        return new CommandResult(true, null, "reloadIds");
    }
    public ArrayList<Long> getIdArray() {
        return idArray;
    }
    
}
