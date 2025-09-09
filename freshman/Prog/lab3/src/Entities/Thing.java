package Entities;
//неживой объект
public class Thing extends Obj{
    private int quantity;
    public Thing (String name){
        super(name);
    }
    public Thing (String name, String characteristic){
        super(name, characteristic);
    }
    public Thing (String name, int quantity){
        super(name);
        this.quantity = quantity;
    }
    public int getQuantity(){
        return quantity;
    }
}
