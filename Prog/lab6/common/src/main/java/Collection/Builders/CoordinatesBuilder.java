package Collection.Builders;

import CLI.InputHandler;
import Collection.CollectionObject.Coordinates;

/**
 * Class for building objects of type Coordinates. Uses Builder interface.
 * 
 * @see Builder
 */
public class CoordinatesBuilder implements Builder<Coordinates> {

    /**
     * Method that builds and returns Coordinates instance with validated fileds
     * from user input.
     */
    @Override
    public Coordinates build() {
        InputHandler inputHandler = new InputHandler();

        System.out.println("Building coordinates...");
        System.out.println();
        Coordinates coordinates = new Coordinates(0, 0);

        // x
        while (true) {
            try {
                System.out.println("Enter x coordinate (int).");
                Integer userInput = inputHandler.getIntInput();
                if (userInput == null) {
                    System.out.println("Coordinate can't be null");
                } else {
                    coordinates.setX(userInput);
                    System.out.println("X coordinate has been added.");
                    break;
                }
            } catch (NumberFormatException e) {
                System.out.println("Number was written incorrectly. Try again.");
            }
        }

        // y
        while (true) {
            try {
                System.out.println("Enter y coordinate (int)");
                Integer userInput = inputHandler.getIntInput();
                if (userInput == null) {
                    System.out.println("Coordinate can't be null");
                } else {
                    coordinates.setX(userInput);
                    System.out.println("Y coordinate has been added.");
                    break;
                }
            } catch (NumberFormatException e) {
                System.out.println("Number was written incorrectly. Try again.");
            }
        }
        System.out.println();
        System.out.println("Coordinates generation completed.");
        return coordinates;
    }
}
