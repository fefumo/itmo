package Entities;

public class Place extends Obj {
    String CLOSED = " - находится внутри";
    String OPENED = " - открытое место";
    
    public Place (String name){
        super(name);
    }
    public void install (Thing t){
        if (t.getCharacteristic()!= null){
            System.out.println("установить " + t.getName() + " " + t.getCharacteristic()+ " на " + this.getName());
        } 
        else{
            System.out.println("установить " + t.getName() + " на " + this.getName());
        }
    }

    

}
