package Interfaces;

import Enums.ThinkType;

public interface VerbalAction {
    default public void makeCount(){
        System.out.print("сделать точный подсчёт");
    }
    default public void comeToConclusion(){
        System.out.print("пришёл к выводу, что ");
    }
    default public void decide(String what){
        System.out.print("решил " + what);
    }
    void think(ThinkType t);
}
