package Entities;

import Enums.*;
import Interfaces.*;

public class Human extends Obj implements IRocketInteraction, IClaim{
    public Human(String name, Profession profession) {
        super(name);
    }
    public Human(String name, String characteristic, Profession profession){
        super(name, characteristic);
    }
    public void think(ThinkType t){
        System.out.print(this.getName() +" " + t.type);
    }
    @Override
    public void claimThing(Thing thing) {
        System.out.print(this.getName() + " получает " + thing.getQuantity() + " " + thing.getName());
    }
    @Override
    public void claim(String st) {
            System.out.print("получает " + st + " " + this.getName());
    }
    public void feel(){
        System.out.print("испытывает " + this.getName());
    }
    public void feel(Thing thing){
        System.out.print("испытывает " + thing.getQuantity() + " " + thing.getName());
    }
    @Override
    public void attach(Thing thing){
        System.out.println("приделал " + thing.getName());
    }
    public void make(Thing thing) {
        System.out.print(this.getName() +" начал делать " + thing.getCharacteristic() + " " + thing.getName());;
    }
    public void notMake(Thing thing) {
        System.out.print(this.getName() + " не стал делать " + thing.getCharacteristic() + " " + thing.getName());
    }
    public void jump(Place pl){
        System.out.print(this.getName() + " прыгает по " + pl.getName());
    }
    public void deliver (Place place, Thing thing){
        System.out.print("доставить в " + place.getName() + " " + thing.getName());
    }
    public void makeCount(){
        System.out.print("сделать точный подсчёт");
    }
    public void comeToConclusion(){
        System.out.print(this. getName() + " пришёл к выводу, что ");
    }
    public void decide(String st){
        System.out.print(this.getName() + " решил " + st);
    }
    public void take (Thing thing){
        System.out.print("взять " + thing.getName());
    }
    public void take (Thing thing, Place place){
        System.out.print("взять на " + place.getName() + " " + thing.getName());
    }

}
