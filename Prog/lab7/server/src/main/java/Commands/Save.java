package Commands;


import Communication.CommandResult;
import Exceptions.CommandException;
import Managers.DumpManager;

/**
 * This Java class represents a "Save" command.
 * 
 */
public class Save extends Command {

    public Save(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function marshals a CollectionManager object into an XML file using JAXB.
     * 
     */
    @Override
    public CommandResult execute(String[] args) {
        if (args.length != 0)
            throw new CommandException("There has to be no arguments");
        DumpManager dumpManager = DumpManager.getInstance();
        dumpManager.saveToXmlFile(dumpManager.getPathToEnvVariable());
        return new CommandResult(true, null, this.name, "Collection has been saved.");
    }

}
