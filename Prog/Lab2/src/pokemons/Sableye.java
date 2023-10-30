package pokemons;

import moves.Special.*;
import moves.Status.*;
import ru.ifmo.se.pokemon.*;

public class Sableye extends Pokemon{
    public Sableye(String name, int level){
        super(name, level);
        setStats(50, 75, 75, 65, 65, 50);
        setType(Type.DARK, Type.GHOST);
        setMove(new DreamEater(), new CalmMind(), new Recover(), new DazzlingGleam());
    }
}
