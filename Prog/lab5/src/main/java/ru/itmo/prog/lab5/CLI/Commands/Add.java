package ru.itmo.prog.lab5.CLI.Commands;

import java.time.ZonedDateTime;

import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.collection.Builders.CoordinatesBuilder;
import ru.itmo.prog.lab5.collection.Builders.LabelBuilder;
import ru.itmo.prog.lab5.collection.Builders.MusicBandBuilder;
import ru.itmo.prog.lab5.collection.MusicBand.Coordinates;
import ru.itmo.prog.lab5.collection.MusicBand.Label;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;
import ru.itmo.prog.lab5.collection.MusicBand.MusicGenre;


public class Add  extends Command{

    public Add(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args){

        MusicBandBuilder musicBandBuilder = new MusicBandBuilder();
        MusicBand newCollection = musicBandBuilder.build();
        
        //name
        while(true){
            System.out.println("Enter the name of the band you want to add (String).");
            try {
                String userInput = InputHandler.getStringInput();
                newCollection.setName(userInput);
                System.out.println("Name has been added.");
                break;
                    
            } catch (Exception e) {
                System.out.println(e);
            }
        }
            
        //coordinates
        System.out.println();
        CoordinatesBuilder coordinatesBuilder = new CoordinatesBuilder();
        Coordinates coordinates = coordinatesBuilder.build();
        newCollection.setCoordinates(coordinates);
    
        //number of participants
        System.out.println();
        while(true){
            System.out.println("Enter the number of participants (int).");
            try {
                int userInput = InputHandler.getIntInput();
                newCollection.setNumberOfParticipants(userInput);
                System.out.println("Number of participants has been added.");
                break;             
                    
            } catch (Exception e) {
                System.out.println(e);
            }
            
        }
    
        //albumsCount
        System.out.println();
        while(true){
            System.out.println("Enter the number of albums (long).");
            try {
                long userInput = InputHandler.getLongInput();
                newCollection.setAlbumsCount(userInput);
                System.out.println("Number of albums has been added.");
                break;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    
        //establishmentDate
        System.out.println();
        while(true){
            System.out.println("Enter the date of establishment in \"yyyy-MM-dd\" format.");
            try {
                ZonedDateTime input = InputHandler.getDateInput();
                newCollection.setEstablishmentDate(input);
                System.out.println("The date of estblishment has been added.");
                break;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    
        //musicGenre
        System.out.println();
        MusicGenre genre = MusicGenre.requestGenre();
        newCollection.setGenre(genre);
    
        //label
        System.out.println();
        LabelBuilder labelBuilder = new LabelBuilder();
        Label label = labelBuilder.build();
        newCollection.setLabel(label);
        
        //adding to priorityQueue
        CollectionManager.musicBands.add(newCollection);
    
        System.out.println();
        System.out.println("--------------------------");
        System.out.println("New Music Band has been added to the collection.");
    }
    
}