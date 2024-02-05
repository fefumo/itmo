package Interfaces;
import Entities.*;

public interface IRocketInteraction {
    default public void launchTo(Rocket rocket, Place place){
        System.out.print("запустить " + rocket.getName() + " внутрь " + place.getName());
    }
    void attach(Thing thing);
    
}
