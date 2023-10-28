package moves;
import ru.ifmo.se.pokemon.*;

public class BabyDollEyes extends StatusMove{
    public BabyDollEyes(){
        super(Type.FAIRY, 0, 100);
    }
    @Override
    protected void applyOppEffects(Pokemon p){
        p.setMod(Stat.ATTACK, -1);
    }
    @Override
    protected String describe(){
        return "использует BabyDollEyes: Lowers the target's Attack by one stage.";
    }
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
}