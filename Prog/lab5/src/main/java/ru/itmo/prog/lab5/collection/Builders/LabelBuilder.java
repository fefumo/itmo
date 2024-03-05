package ru.itmo.prog.lab5.collection.Builders;

import ru.itmo.prog.lab5.CLI.Managers.InputHandler;
import ru.itmo.prog.lab5.Exceptions.IncorrectInputException;
import ru.itmo.prog.lab5.collection.MusicBand.Label;
import ru.itmo.prog.lab5.collection.Validators.NameValidator;

public class LabelBuilder implements Builder<Label> {
    
    @Override
    public Label build() {
        InputHandler inputHandler = InputHandler.getInstance();
        System.out.println("Generating label...");
        Label label = new Label(null, 0L);
        
        //name
        while(true){
            System.out.println("Input label's name");
            try {
                String userInput = inputHandler.getInput();
                NameValidator nv = new NameValidator();
                if(nv.validate(userInput)){
                    label.setName(userInput);
                    System.out.println("Label's name has been added.");
                    break;    
            }
            else{
                throw new IncorrectInputException("name has to have at least 3 characters");
            }
            }catch (IncorrectInputException e) {
                System.out.println(e.getMessage());
            }
        }

        //bands
        while(true){
            try {
                System.out.println("Enter label's amount of bands");
                String userInput = inputHandler.getInput();
                long userLongInput = Long.parseLong(userInput);
                label.setBands(userLongInput);
                System.out.println("Label's amount of bands has been added");
                break;

            } catch (Exception e) {
                System.out.println(e);
            }
        }

        return label;
        }
}
