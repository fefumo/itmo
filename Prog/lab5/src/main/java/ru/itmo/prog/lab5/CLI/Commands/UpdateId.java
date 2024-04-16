package ru.itmo.prog.lab5.CLI.Commands;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Collection.MusicBand.MusicBand;
import ru.itmo.prog.lab5.Exceptions.EmptyCollectionException;

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
     * This Java function allows the user to change the ID of a music band in a
     * collection if the ID is
     * unique.
     */
    @Override
    public void execute(String[] args) {
        if (args.length != 2)
            throw new ArrayIndexOutOfBoundsException("There has to be 1 argument (type: long)");
        CollectionManager manager = CollectionManager.getInstance();
        InputHandler inputHandler = InputHandler.getInstance();

        if (manager.getCollection().isEmpty()) {
            throw new EmptyCollectionException(
                    "Fail: Collection is empty - cannot do anything to it \nReturning to starting screen...");
        } else {
            try {
                long userInput = Long.parseLong(args[1]);
                if (manager.getBandById(userInput) != null) {
                    MusicBand band = manager.getBandById(userInput);
                    while (true) {
                        System.out.println("type id you want to change to");
                        String userStringInput = inputHandler.getInput();
                        long finalId = Long.parseLong(userStringInput);
                        if (manager.getBandById(finalId) == null) {
                            band.setId(finalId);
                            manager.getPreviousIds().remove(userInput);
                            System.out.println("");
                            System.out.println("--------------------------");
                            System.out.println(band.getName() + "'s id has been chaged");
                            break;
                        } else {
                            throw new RuntimeException("This id already exists. Try another.");
                        }
                    }
                }
            } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
                System.out.println("There has to be 1 argument (int) provided");
            } catch (Exception e) {
                System.out.println(e);
            }

        }
    }
}
