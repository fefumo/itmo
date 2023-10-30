package moves.Special;

import ru.ifmo.se.pokemon.*;

public class DrainingKiss extends SpecialMove {
    public DrainingKiss(){
        super(Type.FAIRY, 50, 100);
    }
    int damageToHeal;
    @Override
    protected void applyOppDamage(Pokemon def, double damage){
        def.setMod(Stat.HP, (int) Math.round(damage));
        damageToHeal = (int)(damage);
    }
    @Override
    protected void applySelfEffects(Pokemon p){
        p.setMod(Stat.HP, +(int)(damageToHeal*0.75));
    }
    @Override
    protected String describe(){
        return "использует DrainingKiss: drains 75% of the damage inflicted to heal the user.";
    }
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }

}
