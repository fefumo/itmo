/*
 * deprecated. using analogue on client.
 */

package Commands;


import Communication.CommandResult;

/**
 * The `Add` class extends `Command` and implements a method to add a
 * `MusicBand` object to a
 * collection based on user input.
 */
public class Add extends Command {

    public Add(String name, String descr) {
        super(name, descr);
    }

    /**
     * This function checks the number of arguments, requests a MusicBand object,
     * and adds it to a
     * collection based on user input.
     */
    @Override
    public CommandResult execute(String[] args) {
        // if (args.length != 0)
        //     throw new CommandException("There has to be no arguments");
        // CollectionManager manager = CollectionManager.getInstance();
        // MusicBandRequester musicBandRequester = new MusicBandRequester();
        // //InputHandler inputHandler = new InputHandler();
        // if (musicBandRequester.hashCode() == 1) { // мне просто надо было чтобы в add не выдавало ошибок, потому что add выполняется на клиенте.
        //     manager.addElementToCollection(musicBandRequester.requestUserBand());
        //     System.out.println("--------------------------");
        //     System.out.println("MusicBand has been added to the collection.");
        // } else {
        //     MusicBand musicBand = musicBandRequester.requestNonUserBand();
        //     if (musicBand != null) {
        //         manager.addElementToCollection(musicBand);
        //         System.out.println("--------------------------");
        //         System.out.println("MusicBand has been added to the collection.");
        //     } else {
        //         System.out.println("--------------------------");
        //         System.out.println("MusicBand hasn't been added to the collection.");
        //     }
        // }
        return null;

    }
}