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

    public FileInputStream loadStreamFromFile(Path path) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(path.toFile());
                
        return fileInputStream;
    }

    public String[] loadStrinDataFromStream(FileInputStream fileInputStream) throws IOException{
        ArrayList<String> initialData = new ArrayList<>();
        InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream);
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
        String line = bufferedReader.readLine();
        while (line != null){
            initialData.add(line);
            line = bufferedReader.readLine();
        }
        String[] finalData = initialData.toArray(new String[0]);
        bufferedReader.close();

        return finalData;
    }  

}