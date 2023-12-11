package Entities;

import Interfaces.RocketInterface;

public class Rocket extends Thing implements RocketInterface{

    public Rocket(String name) {
        super(name);
    }
    public void launch(Place place){
        System.out.print(" запустить на " + place.getName());
    }
    public void attach(Thing thing){
        System.out.print("приделать " + thing.getName());
    }
}
