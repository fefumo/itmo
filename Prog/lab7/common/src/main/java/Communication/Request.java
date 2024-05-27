package Communication;

import java.io.Serializable;
import java.util.Arrays;

import Collection.CollectionObject.MusicBand;

public class Request implements Serializable {
    private String[] commandAndArgs;
    private MusicBand musicBand;
    private User user;
    
	public Request(String[] commandAndArgs, MusicBand musicBand, User user) {
        this.commandAndArgs = commandAndArgs;
        this.musicBand = musicBand;
        this.user = user;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
    
}
