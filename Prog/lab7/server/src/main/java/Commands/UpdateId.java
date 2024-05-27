/*
 * deprecated. Using analogue on client.
 */

package Commands;

import Communication.CommandResult;

/**
 * This Java class defines a command to update the ID of a music band in a
 * collection if the ID is
 * unique.
 */
public class UpdateId extends Command {

    public UpdateId(String name, String descr) {
        super(name, descr);
    }

    /**
     * in lab 6: Updates an element of the collection based on the id that the user provides
     * (in lab 5: updates the id of an element based on the id that the user provides)
     * check client for further info
     */
    @Override
    public CommandResult execute(String[] args) {
        // if (args.length != 1)
        //     throw new CommandException("There has to be 1 argument (type: long)");
        // CollectionManager manager = CollectionManager.getInstance();
        // InputHandler inputHandler = new InputHandler();
        // MusicBandBuilder musicBandBuilder = MusicBandBuilder.getInstance();
        // String out = "";

        // if (manager.getCollection().isEmpty()) {
        //     throw new EmptyCollectionException(
        //             "Fail: Collection is empty - cannot do anything to it \nReturning to starting screen...");
        // } else {
        //     try {
        //         long userInput = Long.parseLong(args[0]);
        //         if (manager.getBandById(userInput) != null){
        //             MusicBand band = manager.getBandById(userInput);
        //             while (true) {       
        //                 System.out.println("type id you want to change to");
        //                 Long finalId = inputHandler.getLongInput();
        //                 if (manager.getBandById(finalId) == null) {
        //                     band.setId(finalId);
        //                     musicBandBuilder.getPreviousIds().remove(userInput);
        //                     out = out.concat("\n--------------------------\n");
        //                     out = out.concat(band.getName() + "'s id has been chaged\n");
        //                     break;
        //                 } else {
        //                     throw new RuntimeException("This id already exists. Try another.");
        //                 }
        //             }
        //         }
        //         else{
        //             throw new NoSuchElementException("There is no such musicBand");
        //         }
        //     } catch (NumberFormatException e) {
        //         throw new CommandException("There has to be 1 argument (int) provided");
        //     } catch (NoSuchElementException e) {
        //         throw new CommandException(e.getMessage());
        //     }
        // }
        return null;
    }
}
