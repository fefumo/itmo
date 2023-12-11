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
        if (this == o && this.hashCode() == o.hashCode()){
            return true;
        }
        if (this.getClass() != o.getClass()){
            return false;
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
