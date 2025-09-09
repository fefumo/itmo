package pokemons;

import moves.Status.*;
import moves.Physical.*;
import ru.ifmo.se.pokemon.*;

public class Eevee extends Pokemon{
    public Eevee(String name, int level){
        super(name, level);
        setStats(55, 55, 50, 45,65, 55);
        setType(Type.NORMAL);
        setMove(new Confide(), new BabyDollEyes(), new Facade());
    }

}
