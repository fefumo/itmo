package Communication;

import java.io.Serializable;

import Collection.CollectionObject.MusicBand;

public class Request implements Serializable {
    private String command;
    private MusicBand musicBand;

    public Request (String command){
        this.command = command;
    }
    
    public Request (MusicBand musicBand){
        this.musicBand = musicBand;
    }

    public Request (String command, MusicBand musicBand){
        this.command = command;
        this.musicBand = musicBand;
    }
    
    public boolean isEmpty(){
        return command != null;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public MusicBand getMusicBand() {
        return musicBand;
    }

    public void setMusicBand(MusicBand musicBand) {
        this.musicBand = musicBand;
    }

    @Override
    public String toString() {
        return "Request [command=" + command + ", musicBand=" + musicBand + "]";
    }
    
}
