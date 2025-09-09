package Entities;

import Interfaces.IRocketInteraction;

public class Rocket extends Thing implements IRocketInteraction{

    public Rocket(String name) {
        super(name);
    }
    @Override
    public void attach(Thing thing){
        System.out.print("приделать " + thing.getName());
    }
}
