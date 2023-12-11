package Entities;

public class Place extends Obj {
    public double x, y, z;
    public Place (String name){
        super(name);
    }
    public void setCoordinates(double x, double y, double z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
