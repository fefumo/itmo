package ru.itmo.prog.lab5.collection.Builders;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.EmptyLineException;
import ru.itmo.prog.lab5.collection.MusicBand.Coordinates;

public class CoordinatesBuilder implements Builder<Coordinates>{

    @Override
    public Coordinates build() {
        InputHandler inputHandler = InputHandler.getInstance();

        System.out.println("Generating coordinates...");
        System.out.println();
        Coordinates coordinates = new Coordinates(0, 0);
            

        // x
        while (true) {
            try {
                System.out.println("Enter x coordinate (int).");
                int userInput = inputHandler.getIntInput();
                coordinates.setX(userInput);
                System.out.println("X coordinate has been added.");
                break;     
            } catch (EmptyLineException | NumberFormatException e) {
                System.out.println(e.getMessage());
            } 
        }

        //y
        while(true){
            try {
                System.out.println("Enter y coordinate (int)");
                int userIntInput = inputHandler.getIntInput();
                coordinates.setX(userIntInput);
                System.out.println("Y coordinate has been added.");
                break;
            } catch (EmptyLineException | NumberFormatException e) {
                System.out.println(e);
            }
        }

        System.out.println("Coordinates generation completed.");
        return coordinates;
    }
}
