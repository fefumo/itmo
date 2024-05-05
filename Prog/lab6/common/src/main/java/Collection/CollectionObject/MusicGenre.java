package Collection.CollectionObject;

import CLI.Managers.InputHandler;

/**
 * The enum Music genre which serves as a part of MusicBand class.
 */
public enum MusicGenre {
    /**
     * Psychedelic rock music genre.
     */
    PSYCHEDELIC_ROCK,
    /**
     * Psychedelic cloud rap music genre.
     */
    PSYCHEDELIC_CLOUD_RAP,
    /**
     * Soul music genre.
     */
    SOUL,
    /**
     * Blues music genre.
     */
    BLUES,
    /**
     * Punk rock music genre.
     */
    PUNK_ROCK;

    /**
     * Show genres.
     */
    public static void showGenres() {
        int counter = 1;
        for (MusicGenre i : MusicGenre.values()) {
            System.out.println(counter++ + ". - " + i);
        }
    }

    /**
     * Request genre music genre.
     *
     * @return the music genre
     */
    public static MusicGenre requestGenre() {
        InputHandler inputHandler = new InputHandler();
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
            } catch (ArrayIndexOutOfBoundsException  e){
                System.out.println("Look at the available numbers, please. Try again");
            }
        }
    }
}