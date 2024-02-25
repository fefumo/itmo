package ru.itmo.prog.lab5.collection.MusicBand;


public class Label{
    private String name;
    private Long bands; //Поле не может быть null
    
    public Label(String name, Long bands){
        this.name = name;
        this. bands = bands;
    }

    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Long getBands() {
        return bands;
    }
    public void setBands(Long bands) {
        this.bands = bands;
    }

    @Override
    public String toString(){
        return name;
    }
}
