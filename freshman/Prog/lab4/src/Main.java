import java.util.function.Supplier;

import Entities.*;
import Enums.*;
import Interfaces.SolarPanel;

public class Main {
    //где хранится static в рантайме
    
    public static void main(String[] args) {
        //heroes. Vintik и Spuntik оказались бесполезными, так как действовали как одно целое
        // Human Vintik = new Human("Винтик", Profession.UNEMPLOYED);
        // Human Spuntik  = new Human("Шпунтик", Profession.UNEMPLOYED);
        Human Klepka = new Human("Клёпка", Profession.ENGINEER);
        Human They = new Human("Винтик и Шпунтик", Profession.UNEMPLOYED);
        Human Shorty = new Human("коротышка", "обыкновенный земной", Profession.COSMONAUT);
        //inanimate
        Place Moon = new Place("Луна");
        Cave Cave = new Cave("пещера");
        Thing Wheels = new Thing("колёса");
        Thing Tail = new Thing("хвост");
        Rocket Rocket = new Rocket("ракета");
        Thing Trubolet = new Thing("труболёт", "реактивный роликовый ");
        Thing Spacesuit = new Thing("скафандр");
        Thing Benefit = new Thing("выгода", 24);
        Thing Disadvantage = new Thing ("неудобство", 156);
        Thing Project = new Thing("проект", "архитектурный");
        

        System.out.println("==================================================================================================================================");
        //1 предложение
        They.think(ThinkType.THINK);
        System.out.print(", как ");
        They.deliver(Cave, Rocket);
        System.out.print(" и ");
        They.launchTo(Rocket, Moon);
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
        System.out.print(" в " + Spacesuit.getName() + "e, ");
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
        
        //реализация переопределенных методов +  4 лаба
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
        

        //Доктор Пилюлькин сказал, что в ракете НИП условия для проживания лучше,
        //поскольку там каждый может лечь спать в отдельной каюте, в то время как на
        //ракете ФИС все принуждены ютиться в одной двенадцатиместной кабине.
        Rocket fis = new Rocket("ФИС Ракета");
        fis.setCabins(1);
        Rocket nip = new Rocket ("НИП Ракета");
        nip.setCabins(13);
        /*
         * Кубик недолго думая начал создавать архитектурный проект оборудования под жилье лунной пещеры.
         *  По этому проекту вход в пещеру закладывался воздухонепроницаемой стенкой, в которой делалась герметически
         *  закрывающаяся дверь и шлюзовое устройство, после чего пещера заполнялась воздухом. Стены и потолок пещеры
         *  облицовывались гранитом или каким-нибудь другим красивым камнем. Неподалеку от пещеры на лунной поверхности
         *  устанавливались солнечные батареи, вырабатывавшие электроэнергию, необходимую для освещения и отопления помещения.
         *  Внутренность пещеры постепенно переоборудовалась: появлялись комнаты, коридоры, залы, подвалы, лифты, телефонные будки,
         *  закрома, склады, фотолаборатории, научно-исследовательские институты и даже подлунная железная дорога для связи с другими
         *  пещерами. Проект быстро обрастал все новыми и новыми деталями.
         */
        
        Human Kubik = new Human("Кубик", Profession.UNEMPLOYED);
        Kubik.make(Project);
        System.out.println("по которому:");

        Cave.CaveDoor caveDoor = Cave.new CaveDoor("Дверь пещеры");
        //ВАЖНО!!! открытие закрытие двери 
        caveDoor.setStatus(Status.OPENED);
        System.out.println(caveDoor.getStatus());
        // caveDoor.setStatus(Status.CLOSED);
        Cave.closeCave(caveDoor);

        Place surface = new Place("лунная поверхность");
        Thing solarPanel = new Thing("солнечная панель");
        System.out.print(" неподалёку ");
        surface.install(solarPanel);
        //анонимный класс. Нужно ли выносить за main?
        SolarPanel  sP = new SolarPanel(){
            public void generateEnergy(){
                System.out.println("солнечная панель вырабатывает энергию");
            }
        };
        Supplier<String> s = () -> {
            System.out.println("солнечная панель вырабатывает энергию");
            return "";
        };
        

        sP.generateEnergy();
        Thing granite = new Thing("гранит");
        System.out.println(Cave.ceiling + ", " + Cave.walls + " " + Action.VENEER.getAction() + " в " +  granite.getName() + ".");
        
        // String useless_stuff [] = {"комнаты", "коридоры", "залы", "подвалы", "лифты", "телефонные будки",
        //     "закрома", "склады", "фотолаборатории", "научно-исследовательские институты"};
        // System.out.print("Появляются ");
        // for (String i : useless_stuff){
        //     System.out.print(i + ", ");
        // }
        
        /*
         * Знайка и профессор Звездочкин решали в это время другую задачу, а именно:
         *  какие свойства должен иметь вновь открытый антилунит. Исходя из того, что это вещество,
         *  по-видимому, обладает свойствами, противоположными тем, которыми обладает лунит,
         *  они пришли к выводу, что антилунит скорее прозрачный, нежели непрозрачный, скорее
         *  фиолетовый или синеватый, нежели желтоватый, зеленоватый или серо-буромалиновый;
         *  теплопроводность его скорее плохая, нежели хорошая, электропроводность же скорее хорошая,
         *  чем плохая. Удельный вес его скорее небольшой, чем большой, температура плавления
         *  скорее низкая, чем высокая, залегает он в недрах Луны скорее неглубоко, нежели глубоко.
         *  Из минералов, которые могут сопутствовать антилуниту, скорее всего можно назвать лунит,
         *  так как залежи чистого лунита, взаимодействуя с космическими магнитными силами, могли бы
         *  создавать состояние невесомости, что нарушало бы стабильность верхних слоев Луны, чего
         *  в действительности скорее не наблюдается, нежели наблюдается.
         */
        // Antilunite.Antilunite_stats as = new Antilunite.Antilunite_stats();
        // System.out.println();
        // as.showStats();
        // // caveDoor.setStatus(null);
        // System.out.println(s.get());
    }
}
