package Entities;
//неживой объект
public class Thing extends Obj{
    private int quantity;
    private String characteristic;
    public static final String status = "INANIMATE";
    public Thing (String name){
        super(name);
    }
    public Thing (String name, String characteristic){
        super(name);
        this.characteristic = characteristic;
    }
    public String getCharacteristic(){
        return characteristic;
    }
    public Thing (String name, int quantity){
        super(name);
        this.quantity = quantity;
    }
    public int getQuantity(){
        return quantity;
    }
    public void showStatus(){
        System.out.println(status);
    }
    //сделал статичным чтобы не создавать объект thing и привязывать к нему объект внутреннего класса. Здесь это имеет смысл.
    // public static class SolarPanel{
    //     private String name;
    //     public SolarPanel(String name){
    //         super();
    //         this.name = name;
    //     }
    //     public void work(){
    //         System.out.println("вырабатывать энергию");
    //     }
    // } 
}
