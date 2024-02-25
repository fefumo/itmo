package ru.itmo.prog.lab5.collection.Builders;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.IncorrectInputException;
import ru.itmo.prog.lab5.collection.MusicBand.Coordinates;

public class CoordinatesBuilder implements Builder<Coordinates>{

    @Override
    public Coordinates build() throws IncorrectInputException {
        System.out.println("Generating coordinates...");
        System.out.println();
        Coordinates coordinates = new Coordinates(0, 0);
            

        // x
        while (true) {
            try {
                System.out.println("Enter x coordinate (int).");
                int userInput = InputHandler.getIntInput();
                coordinates.setX(userInput);
                System.out.println("X coordinate has been added.");
                break;     
            } catch (Exception e) {
                System.out.println(e);
            } 
        }

        //y
        while(true){
            try {
                System.out.println("Enter y coordinate (int)");
                int userInput = InputHandler.getIntInput();
                coordinates.setX(userInput);
                System.out.println("Y coordinate has been added.");
                break;
            } catch (Exception e) {
                System.out.println(e);
            }
        }

        System.out.println("Coordinates generation completed.");
        return coordinates;
    }
}
