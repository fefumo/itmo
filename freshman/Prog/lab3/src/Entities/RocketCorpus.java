package Entities;

public class RocketCorpus extends Rocket {
    private double width;
    public RocketCorpus (String name){
        super(name);
    }
    @Override
    public void attach(Thing thing) {
        System.out.println("приделать к " + this.getName());
    }
    public double getWidth() {
        return width;
    }

    
}
