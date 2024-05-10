package Collection.Builders;

import CLI.InputHandler;
import Collection.CollectionObject.Label;

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
        InputHandler inputHandler = new InputHandler();
        System.out.println("Generating label...");
        Label label = new Label(null, 0L);

        // name
        while (true) {
            System.out.println("Input label's name (String, can be null)");
            String[] userInputArray = inputHandler.getInput();
            if (userInputArray == null){
                label.setName(null);
            }
            else{
                label.setName(userInputArray[0]);
            }
            System.out.println("Label's name has been added.");
            break;
        }

        // bands
        while (true) {
            try {
                System.out.println("Enter label's amount of bands (Long)");
                Long userInput = inputHandler.getLongInput();
                if (userInput == null) {
                    System.out.println("Bands can't be null");
                } else {
                    label.setBands(userInput);
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
