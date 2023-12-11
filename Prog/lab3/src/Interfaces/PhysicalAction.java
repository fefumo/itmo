package Interfaces;
import Entities.*;

public interface PhysicalAction {
    default public void launch(Thing thing, Place place){
        System.out.print("запустить " + thing.getName() + " внутрь " + place.getName());
    }
    default public void deliver (Place place, Thing thing){
        System.out.print("доставить в " + place.getName() + " " + thing.getName());
    }
    default public void take (Thing thing){
        System.out.print("взять " + thing.getName());
    }
    default public void take (Thing thing, Place place){
        System.out.print("взять на " + place.getName() + " " + thing.getName());
    }
    default public void jump (Place place){
        System.out.print("прыгая по " + place.getName());
    }
    default public void getOn(Place place){
        System.out.print("прыгая по " + place.getName());
    }
    default public void notMake(Thing thing){
        System.out.print("не стал создавать " + thing.getName());
    }
}
