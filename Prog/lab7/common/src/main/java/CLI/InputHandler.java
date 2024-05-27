package CLI;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

/**
 * The InputHandler class provides methods for handling user input
 * from the console or a
 * file, including getting different types of input such as integers, longs, and
 * dates.
 */
public class InputHandler {
    private InputStream inputStream = System.in;
    ByteBuffer bf = ByteBuffer.allocate(128);
    
    private Scanner scanner = new Scanner(inputStream);
    //boolean flagOfUserMode = true;
    /**
     * Method for getting the Scanner of InputHandler class.
     * 
     * @return InputHandler.scanner
     */
    public Scanner getScanner() {
        return scanner;
    }

    public InputStream getInputStream() {
        return inputStream;
    }

    /**
     * Method for getting the input that the program uses.
     * 
     * @return input based on an inputstream that scanner has
     */
    public String[] getInput() {
        String input;
        System.out.print("> ");
        input = this.scanner.nextLine().trim();
        if (input == "") {
            return null;
        }
        String[] commandAndArgs = input.split(" ", 2);
        //System.out.println(input);
        return commandAndArgs;
    }

    public String[] readByBytes() throws IOException {
        while (inputStream.available() > 0){
            int r = inputStream.read();
            if (r == '\n'){
                bf.flip();
                String s = StandardCharsets.UTF_8.decode(bf).toString().replace('\n', ' ').trim();
                String[] array = s.split(" ", 2);
                bf.clear();
                return array;
            }
            bf.put((byte)r); //so that last "\n" doesnt account in buffer
        }
        return null;
    }

    /**
     * Method to set input to InputHandler's scanner to read it from a given file
     * 
     * @param file
     * @throws IOException
     */
    public void setInputFromFile(File file) throws IOException {
        //setflagOfUserMode(false);
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
    /**
     * Method for woeking with scripts. Outputs the line that is given and transforms it like getInput() would.
     * Used in combination with BufferedReader
     * @see BufferedReader
     * @see InputHandler
     */
    public String[] convertFileLine(String line){
        System.out.println(">>> " + line);
        line = line.strip();
        if (line == ""){
            return null;
        }
        String[] c = line.split(" ", 2);
        return c;
    }

    /**
     * Method to set user input (after changing the input stream for scanner, i.e.
     * after wroking with scripts)
     */
    public void setUserInput() {
        //setflagOfUserMode(true);
        this.inputStream = System.in;
        this.scanner = new Scanner(inputStream);
    }

    /**
     * Method to return an Integer from input. Returns null if nothing was passed.
     * 
     * @return Integer of parsed input
     * @throws NumberFormatException
     */
    public Integer getIntInput() throws NumberFormatException {
        String[] userInput = this.getInput();
        if (userInput == null) {
            return null;
        }

        Integer newInt = Integer.parseInt(userInput[0]);
        return newInt;
    }

    /**
     * Method to return a Long from input. Returns null if nothing was passed.
     * 
     * @return Long of parsed input
     * @throws NumberFormatException
     */
    public Long getLongInput() throws NumberFormatException {
        String[] userInput = this.getInput();
        if (userInput == null) {
            return null;
        }
        Long newLong = Long.parseLong(userInput[0]);
        return newLong;
    }

    /**
     * Method to return a ZonedDateTime from input. Returns null if nothing was
     * passed. Has a certain pattern that has to be used in order to work properly.
     * 
     * @return ZonedDateTime of parsed input
     * @throws DateTimeParseException
     */
    public ZonedDateTime getDateInput() throws DateTimeParseException {
        System.out.println("format of input should be \"dd MM uuuu\" i.e. 28 04 2024");
        String[] inputArray = this.getInput();
        if (inputArray == null) {
            return null;
        }
        String input = String.join(" ", inputArray);
        // System.out.println(input);        
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MM uuuu");
        LocalDate localDate = LocalDate.parse(input, formatter);
        ZonedDateTime zonedDateTime = localDate.atStartOfDay(ZoneId.systemDefault());

        return zonedDateTime;
    }

}
