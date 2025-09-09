package ifmo.se;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ResultBean implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    private final List<Result> results;

    public ResultBean(){
        this.results = new ArrayList<>();
    }


    public void addResult(Result result) {
        this.results.add(result);
    }

    public List<Result> getResults() {
        return results;
    }

    public static class Result implements Serializable {
        @Serial
        private static final long serialVersionUID = 2L;
        private String x;
        private String y;
        private String r;
        private boolean isHit;
        private String currentTime;
        private String elapsedTime;


        public Result(String x, String y, String r, boolean isHit, String currentTime, String elapsedTime) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.isHit = isHit;
            this.currentTime = currentTime;
            this.elapsedTime = elapsedTime;
        }

        public String getX() {
            return x;
        }

        public void setX(String x) {
            this.x = x;
        }

        public String getY() {
            return y;
        }

        public void setY(String y) {
            this.y = y;
        }

        public String getR() {
            return r;
        }

        public void setR(String r) {
            this.r = r;
        }

        public boolean getIsHit() {
            return isHit;
        }

        public void setIsHit(boolean hit) {
            isHit = hit;
        }

        public void setElapsedTime(String etime) { elapsedTime = etime; }

        public String getElapsedTime() { return elapsedTime; }

        public void setCurrentTime(String time) { currentTime = time; }

        public String getCurrentTime() { return currentTime; }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Result result = (Result) o;
            return isHit == result.isHit &&
                    x.equals(result.x) &&
                    y.equals(result.y) &&
                    r.equals(result.r);
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y, r, isHit);
        }

        @Override
        public String toString() {
            return "Result{" +
                    "x='" + x + '\'' +
                    ", y='" + y + '\'' +
                    ", r='" + r + '\'' +
                    ", isHit=" + isHit +
                    ", currentTime='" + currentTime + '\'' +
                    ", elapsedTime='" + elapsedTime + '\'' +
                    '}';
        }
    }
}
