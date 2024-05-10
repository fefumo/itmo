package Communication;

import java.io.Serializable;

public class CommandResult implements Serializable {
    private boolean success;
    private String errorMessage;
    private String commandName;
    private String additionalInfo;

    public CommandResult(boolean success, String errorMessage, String commandName){
        this.success = success;
        this.errorMessage = errorMessage;
        this.commandName = commandName;
    }
    public CommandResult(boolean success, String errorMessage, String commandName, String additionalInfo){
        this.success = success;
        this.errorMessage = errorMessage;
        this.commandName = commandName;
        this.additionalInfo = additionalInfo;
    }

    public boolean isSuccess(){
        return success;
    }

    public String getErrorMessage(){
        return errorMessage;
    }

    public String getCommmandName(){
        return commandName;
    }

    @Override
    public String toString() {
        if (isSuccess() == false){
            if (this.additionalInfo == null){
                return "Command " + commandName + " was finished with error: " + errorMessage;
            }
            else{
                return "Command " + commandName + " was finished with error: " + errorMessage + " and additional info: \n" + additionalInfo;
            }
        }
        else if (isSuccess() == true){
            if( this.additionalInfo == null){
                return "Command " + commandName + " was finished successfully";
            }
            else{
                return "Command " + commandName + " was finished successfully with additional info: \n" + additionalInfo;
            }
        }
        return "Command " + commandName + " was finished with result " + success + ", error: " + errorMessage + ", additional info: " + additionalInfo;
    }    
}
