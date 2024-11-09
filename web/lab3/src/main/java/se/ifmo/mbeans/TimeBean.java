package se.ifmo.mbeans;

import java.io.Serializable;
import java.time.LocalTime;
import jakarta.annotation.ManagedBean;
import jakarta.enterprise.context.SessionScoped;

@ManagedBean
@SessionScoped
public class TimeBean implements Serializable{
    private static final long serialVersionUID = 1L;

 
    private String currentTime;

    public TimeBean() {
        this.currentTime = LocalTime.now().toString();
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void updateTime() {
        this.currentTime = LocalTime.now().toString();
    }
}
