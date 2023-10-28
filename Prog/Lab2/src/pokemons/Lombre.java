package pokemons;

import moves.*;
import ru.ifmo.se.pokemon.*;

public class Lombre extends Pokemon{
    public Lombre(String name, int level){
        super(name, level);
        setStats(60, 50, 50, 60, 70, 50);
        setType(Type.WATER, Type.GRASS);
        setMove(new EnergyBall(), new Blizzard(), new FurySwipes());
    }
}
