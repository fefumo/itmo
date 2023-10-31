import pokemons.*;
import ru.ifmo.se.pokemon.*;

public class App {
    public static void main(String[] args){
        Battle b = new Battle();
        Pokemon p1 = new Lombre("Pancho", 1);
        Pokemon p2 = new Sableye("Kill_Menkov", 1);
        Pokemon p3 = new Eevee("Baiden", 1);
        Pokemon p4 = new Sylveon("KTshnik", 1);
        Pokemon p5 = new Lotad("VTshnik", 1);
        Pokemon p6 = new Ludicolo("Ivan", 1);
        b.addAlly(p1);
        b.addAlly(p2);
        b.addAlly(p3);
        b.addFoe(p4);
        b.addFoe(p5);
        b.addFoe(p6);
        b.go();
    }
}
