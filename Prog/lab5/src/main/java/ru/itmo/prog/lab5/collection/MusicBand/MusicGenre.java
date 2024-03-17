package ru.itmo.prog.lab5.collection.MusicBand;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public enum MusicGenre {
    PSYCHEDELIC_ROCK,
    PSYCHEDELIC_CLOUD_RAP,
    SOUL,
    BLUES,
    PUNK_ROCK;

    public static void showGenres() {
        int counter = 1;
        for (MusicGenre i : MusicGenre.values()) {
            System.out.println(counter++ + ". - " + i);
        }
    }

    public static MusicGenre requestGenre() {
        InputHandler inputHandler = InputHandler.getInstance();
        MusicGenre[] array = MusicGenre.values();
        showGenres();
        MusicGenre resultingGenre;
        while (true) {
            System.out.println("Enter the number of the band's genre.");
            try {
                Integer userIntInput = inputHandler.getIntInput();
                if (userIntInput == null) {
                    System.out.println("Number can't be null");
                } else {
                    resultingGenre = array[userIntInput - 1];
                    System.out.println("Genre " + array[userIntInput - 1] + " has been added");
                    return resultingGenre;
                }
            } catch (NumberFormatException e) {
                System.out.println("Number was written incorrectly. Try agian.");
            }
        }
    }
}