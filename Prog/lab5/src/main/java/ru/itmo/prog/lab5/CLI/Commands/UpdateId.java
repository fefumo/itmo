package ru.itmo.prog.lab5.CLI.Commands;


import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;
import ru.itmo.prog.lab5.CLI.Managers.InputHandler;

public class UpdateId extends Command {

    public UpdateId(String name, String descr) {
        super(name, descr);
    }
    
    @Override
    public void execute(String[] args){
        if (CollectionManager.previousIds.isEmpty()){
            System.out.println("Fail: Collection is empty - cannot do anything to it \nReturning to starting screen...");
        }
        else{
            try {
                long userInput = Long.parseLong(args[1]);
                if(CollectionManager.collectionHasId(userInput)){
                    while(true){
                        System.out.println("type id you want to change to");
                        long finalId = InputHandler.getLongInput();
                        if(CollectionManager.getBandById(finalId) == null){
                            CollectionManager.setCollectionId(finalId);
                            break;
                        }
                        else{
                            throw new RuntimeException("This id already exists. Try another.");
                        }
                    }
                }
            } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
            System.out.println("There has to be 1 argument (int) provided");
            } catch (Exception e){
            System.out.println(e);
            }

        }

    }
}
