package Interfaces;

import Entities.Place;
import Entities.Thing;

public interface Ideliver {
        default public void deliver (Place place, Thing thing){
        System.out.print("доставить в " + place.getName() + " " + thing.getName());
    }
}
