package ru.itmo.prog.lab5.CLI.Managers;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

/**
 * The `DumpManager` class in Java implements Singleton design pattern and
 * provides methods for saving
 * to and loading from files, converting Date objects to XMLGregorianCalendar,
 * and reading data from a
 * FileInputStream.
 */
public class DumpManager {

    // same this as in collection manager
    private static DumpManager singletonPattern;

    // The `getInstance()` method in the `DumpManager` class is implementing the
    // Singleton design
    // pattern. It ensures that only one instance of the `DumpManager` class is
    // created and provides a
    // global point of access to that instance.
    public static DumpManager getInstance() {
        if (singletonPattern == null) {
            singletonPattern = new DumpManager();
        }
        return singletonPattern;
    }

    public void saveToFile(Path path) {

    }

    /**
     * The function `loadStreamFromFile` takes a `Path` object as input, creates a
     * `FileInputStream`
     * from the corresponding file, and returns the `FileInputStream`.
     * 
     * @param path The `path` parameter is of type `Path` and represents the
     *             location of the file from
     *             which you want to load a `FileInputStream`.
     * @return The method `loadStreamFromFile` is returning a `FileInputStream`
     *         object.
     */
    public FileInputStream loadStreamFromFile(Path path) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(path.toFile());

        return fileInputStream;
    }

    /**
     * The function `loadStrinDataFromStream` reads data from a FileInputStream and
     * returns it as an
     * array of strings.
     * 
     * @param fileInputStream The `fileInputStream` parameter in the
     *                        `loadStrinDataFromStream` method
     *                        is of type `FileInputStream`. This input stream is
     *                        used to read data from a file. The method
     *                        reads the data from the file input stream, line by
     *                        line, and stores each line in an ArrayList.
     *                        Finally
     * @return The method `loadStrinDataFromStream` returns an array of strings
     *         containing the data
     *         read from the `FileInputStream` provided as a parameter.
     */
    public String[] loadStrinDataFromStream(FileInputStream fileInputStream) throws IOException {
        ArrayList<String> initialData = new ArrayList<>();
        InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream);
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
        String line = bufferedReader.readLine();
        while (line != null) {
            initialData.add(line);
            line = bufferedReader.readLine();
        }
        String[] finalData = initialData.toArray(new String[0]);
        bufferedReader.close();

        return finalData;
    }

    /**
     * The function converts a Date object to an XMLGregorianCalendar object using a
     * specific date
     * format.
     * 
     * @param d The parameter `d` in the `getDate` method is of type `Date`. It
     *          represents a specific
     *          point in time, including both date and time information.
     * @return An XMLGregorianCalendar object is being returned.
     */
    public static final XMLGregorianCalendar getDate(Date d) {
        try {
            return DatatypeFactory.newInstance().newXMLGregorianCalendar(new SimpleDateFormat("yyyy-MM-dd").format(d));
        } catch (DatatypeConfigurationException e) {
            return null;
        }
    }
}
