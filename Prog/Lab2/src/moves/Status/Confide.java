package moves.Status;
import ru.ifmo.se.pokemon.*;

public class Confide extends StatusMove{
    public Confide(){
        super(Type.NORMAL, 2, 100);
    }
    @Override
    protected void applyOppEffects(Pokemon p){
        p.setMod(Stat.SPECIAL_ATTACK, -1);
    }
    @Override
    protected String describe(){
        return "использует Confide: Lowers the target's Special Attack by one stage.";
    }
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
}
