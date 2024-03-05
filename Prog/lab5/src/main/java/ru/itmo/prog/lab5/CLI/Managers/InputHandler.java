package ru.itmo.prog.lab5.CLI.Managers;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

import ru.itmo.prog.lab5.Exceptions.EmptyLineException;

public class InputHandler {
    private InputStream inputStream = System.in;
    private Scanner scanner = new Scanner(inputStream);

    private static InputHandler inputHandlerSingleton;

    public static InputHandler getInstance(){
        if (inputHandlerSingleton == null){
            inputHandlerSingleton = new InputHandler();
        }
        return inputHandlerSingleton;
    }

    public Scanner getScanner() {
        return scanner;
    }

    //indicates current mode (user or non-user)
    private static boolean flagOfUserMode = true;

    public void setflagOfUserMode(boolean flagOfUserMode) {
        InputHandler.flagOfUserMode = flagOfUserMode;
    }
    
    public boolean getflagOfUserMode(){
        return flagOfUserMode;
    }

    public String getInput() throws EmptyLineException{
        System.out.print("> ");

        //for non-user mode
        boolean checkNextLine =this.scanner.hasNextLine();
        if (checkNextLine == false){
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Script has been executed. Changing to the user-mode...");
            System.out.print("> ");
            setflagOfUserMode(true);
            this.inputStream = System.in;
            this.scanner = new Scanner(inputStream);
        }
        String input = this.scanner.nextLine();
        if (validateStringInput(input) == false){
            throw new EmptyLineException("Input cannot be empty. Try again.");
        }

        if (flagOfUserMode == false){
            System.out.println(input);
        }
        return input;
    }

    public void setInputFromFile(File file)throws IOException{
        setflagOfUserMode(false);
        this.inputStream = new FileInputStream(file);
        this.scanner = new Scanner(this.inputStream);
    }

    public int getIntInput() throws EmptyLineException, NumberFormatException{
        String userInput = inputHandlerSingleton.getInput();

        int newInt = Integer.parseInt(userInput);
        return newInt; 
    }

    public Long getLongInput() throws EmptyLineException, NumberFormatException  {
        String userInput = inputHandlerSingleton.getInput();
        Long newLong = Long.parseLong(userInput);
        return newLong;
    }

    public ZonedDateTime getDateInput() throws DateTimeParseException{
        String input = inputHandlerSingleton.getInput();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        LocalDate localDate  = LocalDate.parse(input, formatter);
        ZonedDateTime zonedDateTime = localDate.atStartOfDay(ZoneId.systemDefault());
        
        return zonedDateTime;
    }

    public static boolean validateStringInput(String inputString){
        return !inputString.isBlank() && !inputString.isEmpty();
    }

    
}
