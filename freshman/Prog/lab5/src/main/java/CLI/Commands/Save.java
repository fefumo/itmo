package CLI.Commands;


import CLI.Managers.DumpManager;

/**
 * This Java class represents a "Save" command that takes an array of strings,
 * checks for one element,
 * and marshals a CollectionManager object into an XML file using JAXB.
 */
public class Save extends Command {

    public Save(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function takes an array of strings as input, checks if it has exactly
     * one element, and then
     * marshals a CollectionManager object into an XML file using JAXB.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 1)
            throw new ArrayIndexOutOfBoundsException("There has to be 1 argument (type: long)");
        DumpManager dumpManager = DumpManager.getInstance();
        dumpManager.saveToXmlFile("collection.xml");
    }

}
