package Enums;

public enum Action{
    ROLL ("кататься"), 
    APPEARING("попав"),
    CAN("могла"),
    VENEER("облицовывать");

    private String title;

    Action (String title){
        this.title = title;
    }

    public String getAction(){
        return title;
    }
}
