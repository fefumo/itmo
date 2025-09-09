package lab1;

public class GeometryChecker {
    public static boolean hit(float x, float y, float r) {
        return inRect(x, y, r) || inTriangle(x, y, r) || inCircle(x, y, r);
    }

    private static boolean inRect(float x, float y, float r) {
        return x <= 0 && x >= -r && y >= 0 && y <= r;
    }

    private static boolean inTriangle(float x, float y, float r) {
        return x >= 0 && y >= 0 && x <= r && y <= r && (y + x) <= r;
    }

    private static boolean inCircle(float x, float y, float r) {
        return x <= 0 && y <= 0 && x >= -r && y >= -r && (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2));
    }
}
