package Entities;

public abstract class Obj {
    private String name;
    private String characteristic;
    public Obj (String name){
        this.name = name;
    }
    public Obj (String name, String characteristic){
        this.name = name;
        this.characteristic = characteristic;
    }
    public String getName(){
        return name;
    }
    public String getCharacteristic(){
        return characteristic;
    }

    @Override
    public String toString(){
        final String chr;
        if (this.getCharacteristic() == null){
            chr = "нет характеристик";
        }
        else{
            chr = this.getCharacteristic();
        }
        return "{\n" + "имя: " + this.getName() + "\n"
        + "характеристики: " + chr + "\n"
        + "}\n";
    }

    @Override
    public boolean equals(Object o){
        Obj t = (Obj) o;
        if (t.getCharacteristic() ==  this.getCharacteristic()){
            return true;
        }
        return false;
    }

    @Override
    public int hashCode(){
        if (this.characteristic == null){
            this.characteristic = " " ;
        }
        return name.hashCode() * characteristic.hashCode();
    }
}
