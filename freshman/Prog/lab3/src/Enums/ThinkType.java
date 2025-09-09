package Enums;

public enum ThinkType {
    THINK("думать"),
    FINALTHINK("додумать"),
    THINKOUT("обдумать");

    public String type;
    ThinkType(String type){
        this.type = type;
    }
}
