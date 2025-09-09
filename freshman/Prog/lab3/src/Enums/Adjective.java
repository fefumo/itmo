package Enums;
//могут быть еще наречия и деепричастия
public enum Adjective {
    LONG ("долгих"),
    LAST ("последних"),
    TIRED ("выбился из последних сил"),
    EARTHY ("земной"),
    ARRIVINGAT("попадая на "),
    FREELY ("свободно");


    private String title;

    Adjective(String title){
        this.title = title;
    }

    public String getAdjective(){
        return title;
    }
}
