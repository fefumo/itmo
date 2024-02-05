package Entities;


import java.lang.reflect.Field;

import Enums.Adjective;
//я знаю, что это лучше расписать через enums и интерфейсы, однако
//здесь моя задача показать действие статического внутреннего класса

public class Antilunite extends Obj{
    public Antilunite(String name){
        super(name);
    }
    public Antilunite(){
        super();
    }
    public static String clarity = Adjective.TRANSPARENT.getAdjective();
    public static String colour  = Adjective.PURPLE.getAdjective();
    public static String specificGravity  = "небольшой удельный вес";
    public static String electricalConductivity  = "проводит ток";
    public static String heatConductivity = "плохая теплопроводность";
    public static String meltingTemperature = "низкая температура плавления";
    //можно было просто создать метод showStats. это гораздо логичнее, я знаю
    //просто пытаюсь показать доступ стат. класса к стат. полям.
    //покажу хоть как рефлексией можно пользоваться
    public static class Antilunite_stats{
        Antilunite antilunite = new Antilunite();
        Class cl = antilunite.getClass();
        public void showStats(){
            Field[] fields  = cl.getDeclaredFields();
            System.out.println("Антилунит обладает следующими характеристиками: ");
            for (Field f: fields){;
                System.out.println(f);
            }
        }
    }

}
