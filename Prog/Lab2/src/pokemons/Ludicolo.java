package pokemons;

import moves.*;
import ru.ifmo.se.pokemon.*;

public class Ludicolo extends Pokemon {
    public Ludicolo(String name, int level){
        super(name, level);
        setStats(80, 70, 70, 90, 100, 70);
        setType(Type.WATER, Type.GRASS);
        setMove(new EnergyBall(), new Blizzard(), new FurySwipes(), new MegaDrain());
        }
}
