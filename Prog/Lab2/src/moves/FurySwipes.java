package moves;

import ru.ifmo.se.pokemon.*;

public class FurySwipes extends PhysicalMove{
    public FurySwipes(){
        super(Type.NORMAL, 18, 80, 0, (int)(2 + Math.random())*5);
    }
    @Override
    protected String describe(){
        return "Использует FurySwipes: Hits 2-5 times in one turn.";
    }

}
