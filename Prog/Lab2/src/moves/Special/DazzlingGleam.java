package moves.Special;

import ru.ifmo.se.pokemon.*;

public class DazzlingGleam extends SpecialMove{
    public DazzlingGleam(){
        super(Type.FAIRY, 80, 100);
    }
    @Override
    protected String describe(){
        return " использует DazzlingGleam: inflicts regular damage with no additional effect.";
    }
    
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
}
