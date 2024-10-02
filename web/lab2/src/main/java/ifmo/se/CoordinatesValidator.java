package ifmo.se;

import java.util.Arrays;
import java.util.List;

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
        List<Float> validXValues = Arrays.asList(-2f, -1.5f, -1f, -0.5f, 0f, 0.5f, 1f, 1.5f, 2f);
        return validXValues.contains(x);
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
            // Rectangle dimensions: width = R/2, height = R
            return (x <= r / 2 && y <= r);
        }

        // If none of the conditions match, the point is outside the area
        return false;
    }

}
