package Enums;

public enum Action{
    LAUNCH ("запустить"), 
    ROLL ("кататься"), 
    FEEL("испытывает"),
    APPEARING("попав"),
    CAN("могла");

    private String title;

    Action (String title){
        this.title = title;
    }

    public String getAction(){
        return title;
    }
}
