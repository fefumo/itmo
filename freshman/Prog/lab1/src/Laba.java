
import java.lang.Math;

public class Laba {

    public static void main(String[] args) {
        int[] d = new int[9]; 
        
        for (int i = 0; i < 9; i++){ // 18 16 14 12 10 8 6 4 2
            d[i] = 18 - i*2;  
        }

        double[] x = new double[18];

        //Min + (int)(Math.random() * ((Max - Min) + 1))
        for (int i = 0; i < 18; i++){
            x[i] = -14.0 + (double)(Math.random() * ((13.0 - (-14.0)) + 1));
        }

        

        double[][] doubles = new double[9][18];


        init_doubles(d, x, doubles);
        for (int i = 0; i < 9; i++){
            for (int j = 0; j < 18; j++){
                System.out.printf("%-10.5f ", doubles[i][j]);
            }
            System.out.printf("\n");
        }
        
    }

    public static void f(int[] args) {
        args[0] = 0;
    
    }

    public static void init_doubles(int[] c, double[] x, double[][] doubles){

        for (int i = 0; i < doubles.length; i++){
            for (int j = 0; j < doubles[i].length; j++){
                if (c[i] == 16){
                    doubles[i][j] = Math.cos( Math.asin ( Math.pow( ((x[j] - 0.5)/27) , 2) ));
                }
                else if (c[i] == 4 || c[i] == 8 || c[i] == 14 || c[i] == 18 ){
                    double a1 = Math.asin((x[j] - 0.5)/27.0)/(Math.PI+Math.pow(x[j]-1,3));
                    double a2 = Math.PI + Math.pow(Math.pow(x[j],x[j]),a1);
                    doubles[i][j] = Math.pow(0.5/a2,3);
                }
                else{
                    doubles[i][j] = (3.0/4) * ( (1 - Math.cbrt(Math.cos(x[j]))) / 4);
                }
            }
        }
    }

}
