package moves.Status;

import ru.ifmo.se.pokemon.*;

public class Recover extends StatusMove{
    public Recover(){
        super(Type.NORMAL,0,100);
    }
    @Override
    protected void applySelfEffects(Pokemon p){
        p.setMod(Stat.HP, +25);
    }
    @Override
    protected String describe(){
        return " хилит себя с помощью Recover: heals the user by half its max HP.";
    }
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
}
