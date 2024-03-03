package ru.itmo.prog.lab5.CLI.Managers;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.util.ArrayList;

/*
 * Save and load the collection class
 */
public class DumpManager {
    
    //same this as in collection manager
    private static DumpManager singletonPattern;

    public static DumpManager getInstance(){
        if (singletonPattern == null){
            singletonPattern = new DumpManager();
        }
        return singletonPattern;
    }

    public void saveToFile(Path path){

    }

    //BufferedReader is thread-safe so i used it for future purposes
    public String[] loadFromFile(Path path) throws IOException {
        ArrayList<String> data = new ArrayList<>();

        //maybe changed to StringBuffer in the future
        InputStreamReader inputStreamReader = new InputStreamReader(new FileInputStream(path.toFile()));
        BufferedReader in = new BufferedReader(inputStreamReader);
        //i found this on baeldung. dont judge.
        String line = in.readLine();
        while (line != null){
            data.add(line);
            line = in.readLine();
        }
        String[] newData = data.toArray(new String[0]);
        in.close();
        return newData;
    }
}
