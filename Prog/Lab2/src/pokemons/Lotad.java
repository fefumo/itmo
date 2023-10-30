package pokemons;

import moves.Special.*;
import ru.ifmo.se.pokemon.*;

public class Lotad extends Pokemon{
    public Lotad(String name, int level){
        super(name, level);
        setType(Type.GRASS, Type.WATER);
        setStats(40, 30, 30, 40, 50, 30);
        setMove(new EnergyBall(), new Blizzard());
    }
}
