package moves;
import ru.ifmo.se.pokemon.*;

public class DreamEater extends SpecialMove {
    public DreamEater(){
        super(Type.PSYCHIC, 100, 100);
    }

    boolean checkAttack = false;
    int damageToHeal;
    @Override
    protected void applyOppDamage(Pokemon def, double damage){
        Status pockemonCondition = def.getCondition();
        if(pockemonCondition.equals(Status.SLEEP)){
            def.setMod(Stat.HP, (int) Math.round(damage));
            checkAttack = true;
            damageToHeal = (int)damage;
        }
    }
    @Override
    protected void applySelfEffects(Pokemon p){
        if (checkAttack == true){
            p.setMod(Stat.HP, +(int)(damageToHeal*0.5));
        }
    }    


    @Override
    protected boolean checkAccuracy(Pokemon p1, Pokemon p2){
        return true;
    }
    @Override
    protected String describe(){
        if(checkAttack == true){
            return "Использует DreamEater: only works on sleeping Pokémon. Drains half the damage inflicted to heal the user.";
        }
        else{
            return "Использует DreamEater и не попадает по неспящему покемону";
        }
    }

}
