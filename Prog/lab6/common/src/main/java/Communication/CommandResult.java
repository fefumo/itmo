package Communication;

import java.io.Serializable;

public class CommandResult implements Serializable {
    private boolean success;
    private String errorMessage;
    private String commandName;
    private String commandOutput;

    public CommandResult(boolean success, String errorMessage, String commandName){
        this.success = success;
        this.errorMessage = errorMessage;
        this.commandName = commandName;
    }
    public CommandResult(boolean success, String errorMessage, String commandName, String commandOutput){
        this.success = success;
        this.errorMessage = errorMessage;
        this.commandName = commandName;
        this.commandOutput = commandOutput;
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
            if (this.commandOutput == null){
                return "Command " + commandName + " was finished with error: " + errorMessage;
            }
            else{
                return "Command " + commandName + " was finished with error: " + errorMessage + " and command output: \n" + commandOutput;
            }
        }
        else if (isSuccess() == true){
            if( this.commandOutput == null){
                return "Command " + commandName + " was finished successfully";
            }
            else{
                return "Command " + commandName + " was finished successfully with command output: \n" + commandOutput;
            }
        }
        return "Command " + commandName + " was finished with result " + success + ", error: " + errorMessage + ", command output: " + commandOutput;
    }    
}
