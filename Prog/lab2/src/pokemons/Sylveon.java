package pokemons;

import moves.Physical.*;
import moves.Special.*;
import moves.Status.*;
import ru.ifmo.se.pokemon.*;

public class Sylveon extends Pokemon{
    public Sylveon(String name, int level){
        super(name, level);
        setStats(95, 65, 65, 110, 130, 60);
        setType(Type.FAIRY);
        setMove(new Confide(), new BabyDollEyes(), new Facade(), new DrainingKiss());
    }

}
