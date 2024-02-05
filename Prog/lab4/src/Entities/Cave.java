package Entities;

import Enums.Status;
import Exceptions.CaveAirFillException;
import Exceptions.StatusException;

public class Cave extends Place{
    private Status status = Status.DEFAULT;
    public final String walls = "стены";
    public final String ceiling  = "потлок";
    public Cave(String name){
        super(name);
    }
    //внутренний
    public class CaveDoor{
        private String name;
        private Status status = Status.DEFAULT;
        public CaveDoor(String name){
            this.name = name;
        }
        public String getName(){
            return name;
        }
        //status может принимать только CLOSED, OPENED, DEFAULT
        public void setStatus(Status status){
            try {
                statusValidator(status);
                this.status = status;
            } 
            catch (StatusException e) {
                System.out.println(e);
            }
        }
        public Status getStatus(){
            return this.status;
        }
    }
    //через ! почему-то не работает. как ни пытался.
    public void statusValidator(Status st) throws StatusException{
        if  ( st == Status.CLOSED || st == Status.OPENED || st == Status.DEFAULT) {
        }
        else{
            throw new StatusException("status может принимать только CLOSED, OPENED или DEFAULT");
        }
    }
    
    public Status getStatus(){
        return this.status;
    }

    public void caveAirFIll(CaveDoor door) throws CaveAirFillException{
        if (door.status == Status.OPENED){
            throw new CaveAirFillException("Закрытие пещеры невозможно. Риск разгерметизации. Дверь открыта.");
        }
        else if (door.status == Status.CLOSED){
            System.out.println("Пещера закрывается и может быть наполнена воздухом.");
        }
        else{
            throw new CaveAirFillException("Статус двери неизвестен. Закрытие пещеры невозможно");
        }
    }

    public void closeCave(CaveDoor door) {
        try {
            caveAirFIll(door);
        } catch (CaveAirFillException e) {
            System.out.println(e);
        }

    }
}

