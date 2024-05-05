package Collection.CollectionObject;

import java.time.ZonedDateTime;
import java.time.format.DateTimeParseException;

import CLI.Managers.InputHandler;
import Collection.Builders.CoordinatesBuilder;
import Collection.Builders.LabelBuilder;
import Collection.Builders.MusicBandBuilder;
import Collection.Validators.AlbumsValidator;
import Collection.Validators.NameValidator;

/**
 * The Music band requester class is used to perform operations with requesting Music Bands from user and non-user requesters.
 */
public class MusicBandRequester {
    /**
     * The Music band builder.
     */
    MusicBandBuilder musicBandBuilder = new MusicBandBuilder();
    /**
     * The Name validator.
     */
    NameValidator nv = new NameValidator();
    /**
     * The Albums validator.
     */
    AlbumsValidator av = new AlbumsValidator();

    /**
     * Request user band music band.
     *
     * @return the music band
     */
    public MusicBand requestUserBand() {
        InputHandler inputHandler = new InputHandler();
        MusicBand newBand = musicBandBuilder.build();

        // name
        while (true) {
            System.out.println("Enter the name of the band you want to add (String).");
            String userInput = inputHandler.getInput();
            if (nv.validate(userInput)) {
                newBand.setName(userInput);
                System.out.println("Name has been added.");
                break;
            } else {
                System.out.println("Name can't be blank.");
            }
        }

        // coordinates
        System.out.println();
        CoordinatesBuilder coordinatesBuilder = new CoordinatesBuilder();
        Coordinates coordinates = coordinatesBuilder.build();
        newBand.setCoordinates(coordinates);

        // number of participants
        System.out.println();
        while (true) {
            System.out.println("Enter the number of participants (int) > 0.");
            try {
                Integer intUserInput = inputHandler.getIntInput();
                if (intUserInput == null) {
                    System.out.println("Number can't be null.");
                } else {
                    if (intUserInput < 0) {
                        System.out.println("Number has to be more than 0.");
                    } else {
                        newBand.setNumberOfParticipants(intUserInput);
                        System.out.println("Number of participants has been added.");
                        break;
                    }
                }
            } catch (NumberFormatException e) {
                System.out.println("Number was written incorrectly. Try again.");
            }

        }

        // albumsCount
        System.out.println();
        while (true) {
            System.out.println("Enter the number of albums (long, can be null) > 0.");
            try {
                Long longUserInput = inputHandler.getLongInput();
                if (av.validate(longUserInput) == false) {
                    System.out.println("Number has to be more than 0");
                } else {
                    newBand.setAlbumsCount(longUserInput);
                    System.out.println("Number of albums has been added.");
                    break;
                }
            } catch (NumberFormatException e) {
                System.out.println("Number was written incorrectly. Try again.");
            }
        }

        // establishmentDate
        System.out.println();
        while (true) {
            System.out.println("Enter the date of establishment (can be null).");
            try {
                ZonedDateTime input = inputHandler.getDateInput();
                newBand.setEstablishmentDate(input);
                System.out.println("The date of estblishment has been added.");
                break;
            } catch (DateTimeParseException e) {
                System.out.println(e.getMessage());
            }

        }

        // musicGenre
        System.out.println();
        MusicGenre genre = MusicGenre.requestGenre();
        newBand.setGenre(genre);

        // label
        System.out.println();
        LabelBuilder labelBuilder = new LabelBuilder();
        Label label = labelBuilder.build();
        newBand.setLabel(label);

        return newBand;
    }

    /**
     * Request non user band music band.
     *
     * @return the music band
     */
    public MusicBand requestNonUserBand() {
        boolean validArguments = true;
        MusicBand nonUserBand = musicBandBuilder.build();
        InputHandler inputHandler = new InputHandler();

        // name
        String name = inputHandler.getInput();
        if (name == null) {
            validArguments = false;
            System.out.println("! Name hasn't been set. Invalid argument !");
        }
        nonUserBand.setName(name);
        System.out.println("Name: " + nonUserBand.getName());
        System.out.println();

        // coordinates
        Coordinates coordinates = new Coordinates();
        try {
            Integer x = inputHandler.getIntInput();
            if (x == null) {
                throw new NumberFormatException();
            }
            Integer y = inputHandler.getIntInput();
            if (y == null) {
                throw new NumberFormatException();
            }
            coordinates.setX(x);
            coordinates.setY(y);
        } catch (NumberFormatException e) {
            validArguments = false;
            System.out.println("! Coordinates haven't been set. Invalid argument !");
        }
        nonUserBand.setCoordinates(coordinates);
        System.out.println("X: " + coordinates.getX() + " Y: " + coordinates.getY());
        System.out.println();

        // numberOfParticipants
        try {
            Integer number = inputHandler.getIntInput();
            if (number < 0 || number == null) {
                validArguments = false;
                throw new NumberFormatException();
            } else {
                nonUserBand.setNumberOfParticipants(number);
                System.out.println("NumberOfParticipants: " + nonUserBand.getNumberOfParticipants());
                System.out.println();
            }
        } catch (NumberFormatException e) {
            validArguments = false;
            System.out.println("! NumberOfParticipants hasn't been set. Invalid argument !");
        }

        // albumsCount
        try {
            nonUserBand.setAlbumsCount(inputHandler.getLongInput());
        } catch (NumberFormatException e) {
            validArguments = false;
            System.out.println("! AlbumsCount hasn't been set. Invalid argument !");
        }
        System.out.println("AlbumsCount: " + nonUserBand.getAlbumsCount());
        System.out.println();

        // establishmentDate
        try {
            nonUserBand.setEstablishmentDate(inputHandler.getDateInput());
            ;
        } catch (DateTimeParseException e) {
            // validArguments = false;
            System.out.println("! EstablishmentDate hasn't been set. Invalid argument !");
        }
        System.out.println("establishmentDate: " + nonUserBand.getEstablishmentDate());
        System.out.println();

        // musicGenre
        MusicGenre[] array = MusicGenre.values();
        try {
            Integer input = inputHandler.getIntInput();
            if (input == null || input < 0 || input > array.length - 1) {
                throw new NumberFormatException();
            }
            MusicGenre resultingGenre = array[input - 1];
            nonUserBand.setGenre(resultingGenre);
        } catch (NumberFormatException e) {
            System.out.println("! MusicGenre hasn't been set. Invalid argument !");
        }
        if (nonUserBand.getGenre() == null) {
            validArguments = false;
            System.out.println("! MusicGenre hasn't been set. Invalid argument !");
        }
        System.out.println("MusicGenre: " + nonUserBand.getGenre());
        System.out.println();

        // label
        Label label = new Label();
        String labelName = inputHandler.getInput();
        label.setName(labelName);
        System.out.println("Label name: " + labelName);
        try {
            Long input = inputHandler.getLongInput();
            System.out.println("Label bands: " + input);
            if (input == null) {
                throw new NumberFormatException();
            }
            label.setBands(input);
            nonUserBand.setLabel(label);
        } catch (NumberFormatException e) {
            validArguments = false;
            System.out.println("! Label hasn't been set. Invalid argument !");
        }
        System.out.println("Label: " + nonUserBand.getLabel());

        // result
        if (validArguments == true) {
            System.out.println("--------------------------");
            System.out.println("All arguments are valid. New Music Band will be added to the collection.");
            System.out.println();
        } else {
            System.out.println("--------------------------");
            System.out.println(
                    "Not all arguments are valid. Music Band can't be added to the collection. Check your script for valid values.");
            System.out.println();
            return null;
        }
        return nonUserBand;
    }
}
