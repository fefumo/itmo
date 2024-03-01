package ru.itmo.prog.lab5.CLI.Managers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

import ru.itmo.prog.lab5.Exceptions.EmptyLineException;

public class InputHandler {
    public static Scanner inputScanner = new Scanner(System.in);

    public static String getStringInput() throws EmptyLineException{
        System.out.print("> ");
        String  userInput = inputScanner.nextLine();
        if (validateStringInput(userInput) == false){
            throw new EmptyLineException("Your input cannot be empty. Try again.");
        }
        return userInput;
    }

    public static int getIntInput() {
        String userInput = InputHandler.getStringInput();
        int newInt = Integer.parseInt(userInput);
        return newInt;
    }

    public static Long getLongInput() {
        String userInput = InputHandler.getStringInput();
        Long newLong = Long.parseLong(userInput);
        return newLong;
    }

    public static ZonedDateTime getDateInput() {
        String input = InputHandler.getStringInput();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        LocalDate localDate  = LocalDate.parse(input, formatter);
        ZonedDateTime zonedDateTime = localDate.atStartOfDay(ZoneId.systemDefault());
        
        return zonedDateTime;
    }

    public static boolean validateStringInput(String inputString){
        return !inputString.isBlank() && !inputString.isEmpty();
    }

    
}
