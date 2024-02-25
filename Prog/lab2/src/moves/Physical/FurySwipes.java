package moves.Physical;

import ru.ifmo.se.pokemon.*;

public class FurySwipes extends PhysicalMove{
    public FurySwipes(){
        super(Type.NORMAL, 18, 80);
    }
    @Override
    protected double calcBaseDamage(Pokemon att, Pokemon def){
        super.hits = (int)(2 + (Math.random()* 5));
        return super.calcBaseDamage(att, def);
    }
    @Override
    protected String describe(){
        return "Использует FurySwipes: Hits 2-5 times in one turn.";
    }

}
