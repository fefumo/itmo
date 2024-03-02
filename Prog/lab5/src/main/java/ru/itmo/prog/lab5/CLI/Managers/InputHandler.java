package ru.itmo.prog.lab5.CLI.Managers;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

import ru.itmo.prog.lab5.Exceptions.EmptyLineException;

public class InputHandler {
    public static Scanner inputScanner = new Scanner(System.in);

    public static String[] getInput() throws EmptyLineException{
        System.out.print("> ");
        String userInput = inputScanner.nextLine();
        String[] inputArray = userInput.split(" ");
        if (validateStringInput(userInput) == false){
            throw new EmptyLineException("Your input cannot be empty. Try again.");
        }
        return inputArray;
    }

    //ONLY USABLE IF STRING WITH SPACES IS REQUIRED (I.E. NAME FIELD)
    public static String getStringInput(){
        String[] userInput = InputHandler.getInput();
        String output = String.join(" ", userInput);
        return output;
    }

    public static int getIntInput() throws ParseException {
        String[] userInput = InputHandler.getInput();
        if (userInput.length > 1){
            throw new ParseException("Input has to be one number without spaces", 0);
        }
        int newInt = Integer.parseInt(userInput[0]);
        return newInt; 
    }

    public static Long getLongInput() throws ParseException {
        String[] userInput = InputHandler.getInput();
        if (userInput.length > 1){
            throw new ParseException("Input has to be one number without spaces", 0);
        }
        Long newLong = Long.parseLong(userInput[0]);
        return newLong;
    }

    public static ZonedDateTime getDateInput() {
        String[] input = InputHandler.getInput();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        LocalDate localDate  = LocalDate.parse(input[0], formatter);
        ZonedDateTime zonedDateTime = localDate.atStartOfDay(ZoneId.systemDefault());
        
        return zonedDateTime;
    }

    public static boolean validateStringInput(String inputString){
        return !inputString.isBlank() && !inputString.isEmpty();
    }

    
}
