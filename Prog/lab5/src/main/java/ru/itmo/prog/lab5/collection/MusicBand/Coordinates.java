package ru.itmo.prog.lab5.collection.MusicBand;

import java.util.Objects;

public class Coordinates {
    private int x;
    private int y;

    public Coordinates(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public Coordinates() {
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "x: " + x + ", y: " + y;
    }

    public int compareTo(Coordinates o) {
        if (o == null) {
            return 1;
        }

        int result = Integer.compare(this.x, o.x);

        if (result == 0)
            return Double.compare(this.y, o.y);
        return result;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}
