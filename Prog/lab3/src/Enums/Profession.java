package Enums;

public enum Profession {
    ENGINEER ("Инженер"),
    COSMONAUT ("космонавт"), 
    UNEMPLOYED ("");

    private String title;

    Profession (String title){
        this.title = title;
    }
    public String getProfession(){
        return title;
    }
    public void get(Profession pr, int num){
        System.out.print(pr.getProfession() +  " получает" + num );
    }
}