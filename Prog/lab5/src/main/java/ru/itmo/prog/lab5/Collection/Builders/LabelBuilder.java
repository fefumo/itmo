package ru.itmo.prog.lab5.Collection.Builders;

import ru.itmo.prog.lab5.Collection.MusicBand.Label;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

/**
 * Class for building objects of type Label. Uses Builder interface.
 * 
 * @see Builder
 */
public class LabelBuilder implements Builder<Label> {

    /**
     * Mathod that builds and returns a Label instance with validated fields from
     * user input.
     */
    @Override
    public Label build() {
        InputHandler inputHandler = InputHandler.getInstance();
        System.out.println("Generating label...");
        Label label = new Label(null, 0L);

        // name
        while (true) {
            System.out.println("Input label's name (String, can be null)");
            String userInput = inputHandler.getInput();
            label.setName(userInput);
            System.out.println("Label's name has been added.");
            break;
        }

        // bands
        while (true) {
            try {
                System.out.println("Enter label's amount of bands (Long)");
                String userInput = inputHandler.getInput();
                if (userInput == null) {
                    System.out.println("Bands can't be null");
                } else {
                    long userLongInput = Long.parseLong(userInput);
                    label.setBands(userLongInput);
                    System.out.println("Label's amount of bands has been added");
                    break;
                }

            } catch (NumberFormatException e) {
                System.out.println("Number was written incorrectly. Try again.");
            }
        }

        return label;
    }
}
