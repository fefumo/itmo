package se.ifmo.mbeans;

import jakarta.annotation.Resource;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import jakarta.transaction.UserTransaction;
import se.ifmo.AreaChecker;
import se.ifmo.db.Point;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named("pointBean")
@SessionScoped
public class PointBean implements Serializable {

    private double x;
    private double y;
    private double r;
    private boolean result;
    private String hiddenX;
    private String hiddenY;
    private List<Point> points = new ArrayList<>(); // List to hold session points

    @PersistenceContext
    private EntityManager em;

    @Resource
    private UserTransaction userTransaction;
    // Method to validate, persist, and add point to session list
    @Transactional
    public void checkAndAddPoint() {

        result = AreaChecker.isInArea(x, y, r); // Perform validation

        // Create a new Point object with validated data
        Point point = new Point(x, y, r, result);

        // Persist the Point in the database
        //em.persist(point);

        // Add the Point to the session list
        points.add(point);

        EntityTransaction transaction = em.getTransaction();
        try {
            transaction.begin();
            em.persist(point);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction.isActive()) {
                transaction.rollback();
            }
        }
    }

    //--------------------------------------------------------------
    @Transactional
    public void addPointFromGraph() {
        double pointX = Double.parseDouble(hiddenX);
        double pointY = Double.parseDouble(hiddenY);
        double radius = this.r;

        boolean result = AreaChecker.isInArea(pointX, pointY, radius);
        Point point = new Point(pointX, pointY, radius, result);

        points.add(point);

        EntityTransaction transaction = em.getTransaction();
        try {
            transaction.begin();
            em.persist(point);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction.isActive()) {
                transaction.rollback();
            }
        }
    }
    @Transactional
    public void addPointFromInput() {
        double pointX = this.x;
        double pointY = this.y;
        double radius = this.r;

        boolean result = AreaChecker.isInArea(pointX, pointY, radius);
        Point point = new Point(pointX, pointY, radius, result);

        points.add(point);

        EntityTransaction transaction = em.getTransaction();
        try {
            transaction.begin();
            em.persist(point);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction.isActive()) {
                transaction.rollback();
            }
        }
    }
//-----------------------------------------------------------------------------------

    public String getPointsAsSvg() {
        StringBuilder svgPoints = new StringBuilder();
        double scaleFactor = 85 / r; // вычисляем масштаб на основе текущего R

        for (Point point : points) {
            double svgX = 200 + point.getX() * scaleFactor;
            double svgY = 200 - point.getY() * scaleFactor;
            String color = point.getResult() ? "green" : "red";
            svgPoints.append("<circle cx='").append(svgX)
                     .append("' cy='").append(svgY)
                     .append("' r='5' fill='").append(color)
                     .append("' />");
        }
        return svgPoints.toString();
    }

    // Method to get points for display in the table
    public List<Point> getPoints() {
        return points;
    }

    // Getters and setters for x, y, r
    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setHiddenX(String hiddenX) {
        this.hiddenX = hiddenX;
    }
    public void setHiddenY(String hiddenY) {
        this.hiddenY = hiddenY;
    }
    public String getHiddenX() {
        return hiddenX;
    }
    public String getHiddenY() {
        return hiddenY;
    }
}
