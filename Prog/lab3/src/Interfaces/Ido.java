package Interfaces;

import Entities.Thing;

public interface Ido {
        default public void notMake(Thing thing){
            System.out.print("не стал создавать " + thing.getName());
    }
}
