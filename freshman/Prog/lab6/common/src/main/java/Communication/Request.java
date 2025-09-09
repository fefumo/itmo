package Communication;

import java.io.Serializable;
import java.util.Arrays;

import Collection.CollectionObject.MusicBand;

public class Request implements Serializable {
    private String[] commandAndArgs;
    private MusicBand musicBand;

    public Request (String[] commandAndArgs){
        this.commandAndArgs = commandAndArgs;
    }
    
    public Request (MusicBand musicBand){
        this.musicBand = musicBand;
    }

    public Request (String[] commandAndArgs, MusicBand musicBand){
        this.commandAndArgs = commandAndArgs;
        this.musicBand = musicBand;
    }

    @Override
    public String toString() {
        return "Request [commandAndArgs=" + Arrays.toString(commandAndArgs) + ", musicBand=" + musicBand + "]";
    }

    public MusicBand getMusicBand() {
        return musicBand;
    }

    public void setMusicBand(MusicBand musicBand) {
        this.musicBand = musicBand;
    }

    public String[] getCommandAndArgs() {
        return commandAndArgs;
    }

    public void setCommandAndArgs(String[] commandAndArgs) {
        this.commandAndArgs = commandAndArgs;
    }

    
}
