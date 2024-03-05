package ru.itmo.prog.lab5.collection.MusicBand;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.IncorrectInputException;

public enum MusicGenre{
    PSYCHEDELIC_ROCK,
    PSYCHEDELIC_CLOUD_RAP,
    SOUL,
    BLUES,
    PUNK_ROCK;

    public static void showGenres(){
        int counter = 1;
        for (MusicGenre i: MusicGenre.values()){
            System.out.println("" + counter++ + ". - " + i);
        }
    }

    public static MusicGenre requestGenre(){
        InputHandler inputHandler = InputHandler.getInstance();
        MusicGenre[] array = MusicGenre.values();
        showGenres();
        MusicGenre resultingGenre;
        while(true){
            System.out.println("Enter the number of the band's genre.");
            try {
                int userIntInput = inputHandler.getIntInput();
                resultingGenre = array[userIntInput-1];
                System.out.println("Genre " + array[userIntInput - 1] + " has been added");
                return resultingGenre;
            } catch (NumberFormatException | IncorrectInputException e) {
                System.out.println(e.getMessage());
            }

        }
    }

}