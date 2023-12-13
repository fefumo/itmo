package Entities;

import Enums.*;
import Interfaces.*;

public class Human extends Obj implements VerbalAction, IRocketInteraction, IFeel, IClaim, Ijump, Itake, Ideliver, Ido {
    public Human(String name, Profession profession) {
        super(name);
    }
    public Human(String name, String characteristic, Profession profession){
        super(name, characteristic);
    }
    @Override
    public void think(ThinkType t){
        System.out.print(this.getName() +" " + t.type);
    }
    @Override
    public void claimThing(Thing thing){
        System.out.print(this.getName() + " получает " + thing.getQuantity() + " " + thing.getName());
    }
    @Override
    public void claim(String st){
        System.out.println("получает " + st + this.getName());
    }
    @Override
    public void feel(){
        System.out.print("испытывает " + this.getName());
    }
    @Override
    public void feel(Thing thing){
        System.out.print("испытывает " + thing.getQuantity() + " " + thing.getName());
    }
    @Override
    public void attach(Thing thing){
        System.out.println("приделал " + thing.getName());
    }

}
