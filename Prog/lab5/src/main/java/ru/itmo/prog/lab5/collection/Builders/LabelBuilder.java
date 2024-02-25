package ru.itmo.prog.lab5.collection.Builders;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.collection.MusicBand.Label;

public class LabelBuilder implements Builder<Label> {
    
    @Override
    public Label build() {
        System.out.println("Generating label...");
        Label label = new Label(null, 0L);
        
        //name
        while(true){
            try {
                System.out.println("Input label's name");
                String input = InputHandler.getStringInput();
                System.out.println("Label's name has been added.");
                label.setName(input);
                break;
                }
            catch (Exception e) {
                System.out.println(e);  
            }
        }

        //bands
        while(true){
            try {
                System.out.println("Enter label's amount of bands");
                Long input = InputHandler.getLongInput();
                label.setBands(input);
                System.out.println("Label's amount of bands has been added");
                break;

            } catch (Exception e) {
                System.out.println(e);
            }
        }

        return label;
    }
}
