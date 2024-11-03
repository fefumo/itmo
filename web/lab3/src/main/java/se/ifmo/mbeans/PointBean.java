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
    private List<Point> points = new ArrayList<>(); // List to hold session points

    @PersistenceContext
    private EntityManager em;

    @Resource
    private UserTransaction userTransaction;
    // Method to validate, persist, and add point to session list
    @Transactional
    public void checkAndAddPoint() {
        System.out.println("in checnAndAddPoint()\n");

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
        System.out.println("after adding data to database\n");
        //PrimeFaces.current().executeScript("updateGraph();"); // не работает:)):):): КАК И ВЕСЬ JSF Я НЕНАВИЖУ ЭТУ ЛАБУ
        //System.out.println("after calling updateGraph()\n");
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

}
