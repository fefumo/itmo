package Interfaces;

import Entities.Place;
import Entities.Thing;

public interface Itake {
        default public void take (Thing thing){
        System.out.print("взять " + thing.getName());
    }
    default public void take (Thing thing, Place place){
        System.out.print("взять на " + place.getName() + " " + thing.getName());
    }
}
