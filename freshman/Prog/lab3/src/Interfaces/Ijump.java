package Interfaces;

import Entities.Place;

public interface Ijump {
    default public void jump (Place place){
        System.out.print("прыгая по " + place.getName());
    }
}
