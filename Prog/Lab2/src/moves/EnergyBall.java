package moves;

import ru.ifmo.se.pokemon.*;

public class EnergyBall extends SpecialMove{    
    public EnergyBall(){
        super(Type.GRASS, 90, 100);
    }
    boolean ballFlag = false;
    @Override
    protected void applyOppEffects(Pokemon p){
        int ballChance = (int)(Math.random()*101);
        if (ballChance <= 10){
            p.setMod(Stat.SPECIAL_DEFENSE, -1);
            ballFlag = true;
        }
        
    }
    @Override
    protected String describe(){
        if (ballFlag == true){
            return "использует EnergyBall и понижает special defense by one stage ";
        }
        else{
            return "использует EnergyBall и не понижает special defense by one stage";
        }
    }

    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }

}
