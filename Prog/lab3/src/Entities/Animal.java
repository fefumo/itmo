package Entities;

import Interfaces.IClaim;

public class Animal extends Obj implements IClaim {
    public Animal(String name){
        super(name);
    }
    @Override
    public void claim(String st){
        System.out.println("животное с кличкой " + this.getName() + "получает " + st);
    }
    @Override
    public void claimThing(Thing t) {
        System.out.println("животное с кличкой " + this.getName() + "получает " + t.getName());
    }

}
