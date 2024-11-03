package se.ifmo.db;


import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
@Named
public class PointDAO {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public void save(Point p){
        em.persist(p);
    }

    public List<Point> getPoints(){
        return em.createQuery("SELECT p FROM Point p", Point.class).getResultList();
    }

}
