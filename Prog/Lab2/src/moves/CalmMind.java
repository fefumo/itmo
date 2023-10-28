package moves;

import ru.ifmo.se.pokemon.*;

public class CalmMind extends StatusMove{
    public CalmMind(){
        super(Type.PSYCHIC, 0, 100);
    }
    @Override
    protected void applySelfEffects(Pokemon p){
        p.setMod(Stat.SPECIAL_ATTACK, +1);
        p.setMod(Stat.SPECIAL_DEFENSE, +1);
    }
    @Override
    protected String describe(){
        return " бафает себя с помощью CalmMind: raises the user's Special Attack and Special Defense by one stage.";
    }
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
}
