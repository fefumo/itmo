import Entities.*;
import Enums.*;

public class Main {
    public static void main(String[] args) {
        //heroes. Vintik и Spuntik оказались бесполезными, так как действовали как одно целое
        Human Vintik = new Human("Винтик", Profession.UNEMPLOYED);
        Human Spuntik  = new Human("Шпунтик", Profession.UNEMPLOYED);
        Human Klepka = new Human("Клёпка", Profession.ENGINEER);
        Human They = new Human("Винтик и Шпунтик", Profession.UNEMPLOYED);
        Human Shorty = new Human("коротышка", "обыкновенный земной", Profession.COSMONAUT);
        //inanimate
        Place Moon = new Place("Луна");
        Place Cave = new Place("пещера");
        Thing Wheels = new Thing("колёса");
        Thing Tail = new Thing("хвост");
        Rocket Rocket = new Rocket("ракета");
        Thing Trubolet = new Thing("труболёт", "реактивный роликовый ");
        Thing Spacesuit = new Thing("скафандр");
        Thing Benefit = new Thing("выгода", 24);
        Thing Disadvantage = new Thing ("неудобство", 156);
        Thing Project = new Thing("проект");
        

        System.out.println("==================================================================================================================================");
        //1 предложение
        They.think(ThinkType.THINK);
        System.out.print(", как ");
        They.deliver(Cave, Rocket);
        System.out.print(" и ");
        They.launch(Rocket, Moon);
        System.out.println(".");
        //2 предложение
        They.think(ThinkType.THINKOUT);
        System.out.print(", ");
        Rocket.attach(Tail);
        System.out.print(" и ");
        Rocket.attach(Wheels);
        System.out.print(", чтоб она " + Action.CAN.getAction() +" "+  Adjective.FREELY.getAdjective() + " " + Action.ROLL.getAction() + " по " + Moon.getName() + " на манер ");
        System.out.println(Trubolet.getCharacteristic() + Trubolet.getName());
        //3 предложение
        System.out.print("Единственное, до чего не смогли ");
        They.think(ThinkType.FINALTHINK);
        System.out.print(", это где ");
        They.take(Wheels, Moon);
        System.out.println(".");
        //4 предложение
        System.out.print(Profession.ENGINEER.getProfession() + " " + Klepka.getName() + ", который " + Adjective.TIRED.getAdjective() + ", ");
        Klepka.jump(Moon);
        System.out.print("в " + Spacesuit.getName() + "e, никаких ");
        Klepka.notMake(Project);
        System.out.print(", а вместо этого ");
        Klepka.decide("выяснить");
        System.out.print(", какие " + Benefit.getName() + " ");
        Shorty.claim(Shorty.getCharacteristic());
        System.out.print(" попав на " + Moon.getName() + ", и какие " + Disadvantage.getName() + " ");
        Shorty.feel();
        System.out.println(".");
        //5 предложение
        Klepka.think(ThinkType.THINKOUT);
        System.out.print(" всё как следует и ");
        Klepka.comeToConclusion();
        System.out.print(Adjective.ARRIVINGAT.getAdjective() + Moon.getName() + " " + Profession.COSMONAUT.getProfession() + " ");
        Shorty.claimThing(Benefit);
        System.out.print(" взамен которых ");
        Shorty.feel(Disadvantage);
        
        System.out.println(".");
        System.out.println("==================================================================================================================================");
        
        //реализация переопределенных методов
        Thing r2 = new Thing("двигатель ", "реактивный роликовый " );
        System.out.println(r2.equals(Trubolet));
        // System.out.println(Vintik.toString());
        // Thing wheels2 = new Thing("wheels", 4);
        // Thing wheels3 = new Thing("wheels", 4);
        // System.out.println("до приравнивания одного объекта к другому: " + wheels2.equals(wheels3));
        // wheels2 = wheels3;
        // System.out.println("после приравнивания: "+ wheels2.equals(wheels3) + ", теперь они ссылаются на одну и ту же область памяти ");
        // System.out.println(Vintik.hashCode());
        // System.out.println(Rocket.hashCode());

    }

}
