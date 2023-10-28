package moves;

import ru.ifmo.se.pokemon.*;

public class Blizzard extends SpecialMove {
    public Blizzard(){
        super(Type.ICE, 110, 70);
    }
    boolean freezeFlag = false;
    @Override
    protected void applyOppEffects(Pokemon p){
        int freezeChance = (int)(Math.random()*101);
        if (freezeChance <= 10){
            Effect.freeze(p);
            freezeFlag = true;
        }
    }
    @Override
    protected String describe(){
        if (freezeFlag == true){
            return "Использует Blizzard и замораживает противника";
        }
        else{
            return "промахивается и не замораживает проитвника с помощью Blizzard";
        }
    }
}
