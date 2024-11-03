package se.ifmo;

/**
 * Utility class to check if a point lies within a defined area.
 */
public class AreaChecker {

    public static boolean isInArea(double x, double y, double r) {
        boolean inRectangle = false;
        boolean inTriangle = false;
        boolean inCircle = false;

        if (isXInArea(x) && isYInArea(y) && isRInArea(r)){
            inRectangle = (x >= 0 && x <= r) && (y >= 0 && y <= r / 2);

            inTriangle = (x <= 0 && x >= -r) && (y <= 0 && y >= -r) && (y >= -x - r);

            inCircle = (x <= 0 && y >= 0) && (x * x + y * y <= (r / 2) * (r / 2));

            return inRectangle || inTriangle || inCircle;
        }
        else {
            return false;
        }
    }

    private static boolean isXInArea(double x){
        return x >= -3 && x <= 5;
    }

    private static boolean isYInArea(double y){
        return y >= -3 && y <= 3;
    }

    private static boolean isRInArea(double r){
        return r >=1 && r <= 3;
    }
}