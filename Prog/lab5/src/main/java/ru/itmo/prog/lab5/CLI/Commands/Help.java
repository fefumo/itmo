package ru.itmo.prog.lab5.CLI.Commands;

public class Help{

    public static void execute(){
        System.out.println("here is the list of available commands: ");
        for (Commands e: Commands.values()){
            System.out.println(" " + e.getName());
        }
    }
    
}
