package ru.itmo.prog.lab5.CLI.Managers;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
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
    //indicates current mode (user or non-user)
    private boolean flagOfUserMode = true;
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
    public void setflagOfUserMode(boolean flagOfUserMode) {
        this.flagOfUserMode = flagOfUserMode;
    }
    public boolean getflagOfUserMode(){
        return flagOfUserMode;
    }
    public InputStream getInputStream(){
        return inputStream;
    }
    
    public String getInput(){
        String input;
        System.out.print("> ");
        input = this.scanner.nextLine().trim();
        if (input == ""){
            return null;
        }
        if (flagOfUserMode == false){
            System.out.println(input);
        }
        return input;
    }

    public void setInputFromFile(File file)throws IOException{
        setflagOfUserMode(false);
        /*
         * сделал это только из-за тз про InputStreamReader.
         * проще было сделать так:
         * this.inputStream = new FileInputStream(file);
         * this.scanner = new Scanner(inputStream);
         */
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
        this.inputStream = new FileInputStream(file);
        this.scanner = new Scanner(bufferedReader);
    }
    public void setUserInput(){
        setflagOfUserMode(true);
        this.inputStream = System.in;
        this.scanner = new Scanner(inputStream);
    }

    public Integer getIntInput() throws EmptyLineException, NumberFormatException{
        String userInput = inputHandlerSingleton.getInput();
        if(userInput == null){
            return null;
        }

        Integer newInt = Integer.parseInt(userInput);
        return newInt; 
    }

    public Long getLongInput() throws EmptyLineException, NumberFormatException  {
        String userInput = inputHandlerSingleton.getInput();
        if (userInput == null){
            return null;
        }
        Long newLong = Long.parseLong(userInput);
        return newLong;
    }

    public ZonedDateTime getDateInput() throws DateTimeParseException{
        System.out.println("format of input should be \"dd MM uuuu\" i.e. 28 04 2024");
        String input = inputHandlerSingleton.getInput();

        if(input == null){
            return null;
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MM uuuu");

        LocalDate localDate  = LocalDate.parse(input, formatter);
        ZonedDateTime zonedDateTime = localDate.atStartOfDay(ZoneId.systemDefault());
        
        return zonedDateTime;
    }
    
}
