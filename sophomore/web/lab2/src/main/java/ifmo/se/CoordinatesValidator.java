package ifmo.se;


public class CoordinatesValidator {
    private final double y, r;
    private final float x;

    CoordinatesValidator(float x, double y, double r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public boolean checkData(){
        if (!validX()) System.out.println("X validation hasn't passed");
        if (!validY()) System.out.println("Y validation hasn't passed");
        if (!validR()) System.out.println("R validation hasn't passed");
        System.out.println(x);
        System.out.println(y);
        System.out.println(r);
        return validX() && validY() && validR();
    }
    private boolean validX(){
        return x >= -2 && x <= 2;
    }

    private boolean validY(){
        return y >= -3 && y <= 5;
    }

    private boolean validR(){
        return r >= 1 && r <= 4;
    }

    public static boolean isInArea(double x, double y, double r) {
        // Top-left corner with triangle
        if (x <= 0 && y >= 0) {
            // Triangle with hypotenuse: y = x + r
            return (y <= x + r);
        }

        // Bottom-left corner with quarter-circle (radius R/2)
        if (x <= 0 && y <= 0) {
            // Circle equation: x^2 + y^2 <= (R/2)^2
            return (x * x + y * y <= (r / 2) * (r / 2));
        }

        // Top-right corner with rectangle
        if (x >= 0 && y >= 0) {
            // Rectangle dimensions: width = R, height = R/2
            return (x <= r && y <= r / 2);
        }

        // If none of the conditions match, the point is outside the area
        return false;
    }

}
