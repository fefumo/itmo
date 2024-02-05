package Entities;


import Exceptions.CabinsSetterExcepetion;
import Interfaces.IRocketInteraction;

public class Rocket extends Thing implements IRocketInteraction{
    private int cabins;

    public Rocket(String name) {
        super(name);
    }

    @Override
    public void attach(Thing thing){
        System.out.print("приделать " + thing.getName());
    }

    public void setCabins(int number){
        try{
            CabinsValidator(number);
            this.cabins = number;
        }
        catch(CabinsSetterExcepetion e){
            System.out.println(e);
        }
    }
    public void CabinsValidator(int number) throws CabinsSetterExcepetion{
        if (number <= 12 && number > 0){
            throw new CabinsSetterExcepetion("Очень мало кают для экипажа ракеты " + this.getName());
        }
        else if (number < 0 || number > 24){
            throw new CabinsSetterExcepetion("Вы создали нереальное колисчество кабин для ракеты " + this.getName() +  ". Попробуйте снова.");
        }
    }
    public int getCabins(){
        return this.cabins;
    }
}
