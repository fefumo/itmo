package moves.Special;

import ru.ifmo.se.pokemon.*;

public class MegaDrain extends SpecialMove{
    public MegaDrain(){
        super(Type.GRASS, 40,100);
    }
    int damageToHeal;
    @Override
    protected void applyOppDamage(Pokemon def, double damage){
        def.setMod(Stat.HP, (int) Math.round(damage));
        damageToHeal = (int)(damage);
    }
    @Override
    protected void applySelfEffects(Pokemon p){
        p.setMod(Stat.HP, +(int)(damageToHeal*0.5));
    }
    @Override
    protected String describe(){
        return "использует MegaDrain: Drains half the damage inflicted to heal the user.";
    }
    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
}
