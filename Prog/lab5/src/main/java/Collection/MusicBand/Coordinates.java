package Collection.MusicBand;

import java.util.Objects;

/**
 * Calss Coordinates which serves as a part of MusicBand class
 *
 * @see MusicBand
 */
public class Coordinates {
    private int x;
    private int y;

    /**
     * Instantiates a new Coordinates.
     *
     * @param x the x
     * @param y the y
     */
    public Coordinates(int x, int y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Instantiates a new Coordinates.
     */
    public Coordinates() {
    }

    /**
     * Gets x.
     *
     * @return the x
     */
    public int getX() {
        return x;
    }

    /**
     * Gets y.
     *
     * @return the y
     */
    public int getY() {
        return y;
    }

    /**
     * Sets x.
     *
     * @param x the x
     */
    public void setX(int x) {
        this.x = x;
    }

    /**
     * Sets y.
     *
     * @param y the y
     */
    public void setY(int y) {
        this.y = y;
    }

    /**
     * To string string.
     *
     * @return the string
     */
    @Override
    public String toString() {
        return "x: " + x + ", y: " + y;
    }

    /**
     * Compare to int.
     *
     * @param o the o
     * @return the int
     */
    public int compareTo(Coordinates o) {
        if (o == null) {
            return 1;
        }

        int result = Integer.compare(this.x, o.x);

        if (result == 0)
            return Double.compare(this.y, o.y);
        return result;
    }

    /**
     * Hash code int.
     *
     * @return the int
     */
    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}
