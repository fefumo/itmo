package pokemons;

import ru.ifmo.se.pokemon.*;
import moves.*;

public class Sylveon extends Pokemon{
    public Sylveon(String name, int level){
        super(name, level);
        setStats(95, 65, 65, 110, 130, 60);
        setType(Type.FAIRY);
        setMove(new Confide(), new BabyDollEyes(), new Facade(), new DrainingKiss());
    }

}
