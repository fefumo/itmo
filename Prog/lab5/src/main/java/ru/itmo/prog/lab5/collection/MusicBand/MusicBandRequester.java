package ru.itmo.prog.lab5.collection.MusicBand;

import java.time.ZonedDateTime;
import java.time.format.DateTimeParseException;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.EmptyLineException;
import ru.itmo.prog.lab5.Exceptions.IncorrectInputException;
import ru.itmo.prog.lab5.collection.Builders.CoordinatesBuilder;
import ru.itmo.prog.lab5.collection.Builders.LabelBuilder;
import ru.itmo.prog.lab5.collection.Builders.MusicBandBuilder;
import ru.itmo.prog.lab5.collection.Validators.NameValidator;

public class MusicBandRequester {
    MusicBandBuilder musicBandBuilder = new MusicBandBuilder();
    NameValidator nv = new NameValidator();
    CollectionManager collectionManager = CollectionManager.getInstance();

    public MusicBand requestUserBand(){
        InputHandler inputHandler = InputHandler.getInstance();
        MusicBand newBand = musicBandBuilder.build();
        
        
        //name
        while(true){
            System.out.println("Enter the name of the band you want to add (String).");
            try {
            String userInput = inputHandler.getInput();
            if(nv.validate(userInput)){
                newBand.setName(userInput);
                System.out.println("Name has been added.");
                break;    
            }
            else{
                System.out.println("Name can't be blank.");
            }
            } catch (IncorrectInputException e) {
                e.getMessage();
            }
        }
        
            
        //coordinates
        System.out.println();
        CoordinatesBuilder coordinatesBuilder = new CoordinatesBuilder();
        Coordinates coordinates = coordinatesBuilder.build();
        newBand.setCoordinates(coordinates);

        
    
        //number of participants
        System.out.println();
        while(true){
            System.out.println("Enter the number of participants (int).");
            try {
                int intUserInput = inputHandler.getIntInput();
                if(intUserInput < 0){
                    System.out.println("number has to be more than 0");
                }
                newBand.setNumberOfParticipants(intUserInput);
                System.out.println("Number of participants has been added.");
                break;
            } catch (IncorrectInputException | NumberFormatException e) {
                System.out.println(e.getMessage());
            }
            
        }
    
        //albumsCount
        System.out.println();
        while(true){
            System.out.println("Enter the number of albums (long).");
            try {
                long longUserInput = inputHandler.getLongInput();
                newBand.setAlbumsCount(longUserInput);
                System.out.println("Number of albums has been added.");
                break;
            } catch (NumberFormatException | IncorrectInputException e) {
                System.out.println(e.getMessage());
            }
        }
    
        //establishmentDate
        System.out.println();
        while(true){
            System.out.println("Enter the date of establishment in \"yyyy-MM-dd\" format.");
            try {
                ZonedDateTime input = inputHandler.getDateInput();
                newBand.setEstablishmentDate(input);
                System.out.println("The date of estblishment has been added.");
                break;    
            } catch (DateTimeParseException | IncorrectInputException e) {
                System.out.println(e.getMessage());
            }
            
        }
    
        //musicGenre
        System.out.println();
        MusicGenre genre = MusicGenre.requestGenre();
        newBand.setGenre(genre);
    
        //label
        System.out.println();
        LabelBuilder labelBuilder = new LabelBuilder();
        Label label = labelBuilder.build();
        newBand.setLabel(label);

        return newBand;
    }

    public MusicBand requestNonUserBand(){
        boolean validArguments = true;
        MusicBand nonUserBand = musicBandBuilder.build();
        InputHandler inputHandler = InputHandler.getInstance();
        
        
        //name
        nonUserBand.setName(inputHandler.getInput());            
        System.out.println("Name: " + nonUserBand.getName());
        System.out.println();

        //coordinates
        Coordinates coordinates = new Coordinates();
        try {
            coordinates.setX(inputHandler.getIntInput());
            coordinates.setY(inputHandler.getIntInput());                
        } catch (NumberFormatException | EmptyLineException e) {
            validArguments = false;
            System.out.println("! Coordinates haven't been set. Invalid argument!");
        }
        nonUserBand.setCoordinates(coordinates);
        System.out.println("X: "+ coordinates.getX() + "; Y: " + coordinates.getY());
        System.out.println();

        //numberOfParticipants
        try {
            int number = inputHandler.getIntInput();
            nonUserBand.setNumberOfParticipants(number);
            System.out.println("NumberOfParticipants: " + nonUserBand.getNumberOfParticipants());
            System.out.println();                    
        } catch (NumberFormatException e) {
            validArguments = false;
            System.out.println("! NumberOfParticipants hasn't been set. Invalid argument !");
        }

        //albumsCount
        try {
            nonUserBand.setAlbumsCount(inputHandler.getLongInput());
        } catch (NumberFormatException e) {
            validArguments = false;
            System.out.println("! AlbumsCount hasn't been set. Invalid argument !");
        }
        System.out.println("AlbumsCount: " + nonUserBand.getAlbumsCount());
        System.out.println();    

        //establishmentDate
        try {
            nonUserBand.setEstablishmentDate(inputHandler.getDateInput());;
        } catch (DateTimeParseException | EmptyLineException e) {
            validArguments = false;
            System.out.println("! EstablishmentDate hasn't been set. Invalid argument !");
        }
        System.out.println("establishmentDate: " + nonUserBand.getEstablishmentDate());
        System.out.println();

        //musicGenre
        MusicGenre[] array = MusicGenre.values();
        try {
            MusicGenre resultingGenre = array[inputHandler.getIntInput()-1];
            nonUserBand.setGenre(resultingGenre);
        } catch (NumberFormatException e) {
            System.out.println("! MusicGenre hasn't been set. Invalid argument !");
        }
        if (nonUserBand.getGenre() == null){
            validArguments = false;
            System.out.println("! MusicGenre hasn't been set. Invalid argument !");
        }
        System.out.println("MusicGenre: " + nonUserBand.getGenre());
        System.out.println();

        //label
        Label label = new Label();
        label.setName(inputHandler.getInput());
        try {
            label.setBands(inputHandler.getLongInput());                    
        } catch (NumberFormatException e) {
            System.out.println("");
        }
        nonUserBand.setLabel(label);
        System.out.println("Label name: " + label.getName());
        System.out.println("Label bands: " + label.getBands());

        //result
        if (validArguments == true){
            System.out.println("All arguments are valid. New Music Band will be added to the collection.");
        }
        else{
            System.out.println("Not all arguments are valid. Music Band can't to the collection. Check your script for valid values.");
            return null;
        }
        return nonUserBand;
    }
}
