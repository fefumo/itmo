package Entities;
//класс для реализации идей
import Interfaces.IClaim;

public class Animal extends Obj implements IClaim {
    public Animal(String name){
        super(name);
    }
    //кринжатина бесполезная...
    @Override
    public void claim(String st){
        System.out.println("животное с кличкой " + this.getName() + "получает " + st);
    }
    @Override
    public void claimThing(Thing t) {
        System.out.println("животное с кличкой " + this.getName() + "получает " + t.getName());
    }
    //локальный класс
    public void eatingGrass(){
        class Grass{
            private String color;

            public Grass(String color){
                this.color = color;
            }
            public String getColor(){
                return color;
            }
        }
        Grass grass = new Grass("Зеленая");
        System.out.println(this.getName() + " ест " + grass.getColor());
    }

}
