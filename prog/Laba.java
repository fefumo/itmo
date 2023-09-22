import java.util.Arrays;
import java.lang.Math;
import java.util.List;

public class Laba {
    public static void main(String[] args) {
        int[] c = new int[9]; 
        
        for (int i = 0; i < 9; i++){ // 18 16 14 12 10 8 6 4 2
            c[i] = 18 - i*2;  
        }
        //System.out.println(Arrays.toString(c));

        double[] x = new double[18];

        //Min + (int)(Math.random() * ((Max - Min) + 1))
        for (int i = 0; i < 18; i++){
            x[i] = -14.0 + (double)(Math.random() * ((13.0 - (-14.0)) + 1));
        }

        //System.out.println(Arrays.toString(x));
        
        double[][] doubles = new double[9][18];

        //List<Integer> list = Arrays.asList(4,8,14,18);

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
                    doubles[i][j] = (3.0/4.0) * ( (1 - Math.cbrt(Math.cos(x[j]))) / 4);
                }
            }
        }
        // for (int i = 0; i < doubles.length; i++){
        //     for (int j = 0; j < doubles[i].length; j++){
        //         double p1, p2, p3, p4, p5, p6, p7, p8 ,p9;
        //         p1 = Math.asin((x[j] - 0.5)/27);
        //         p2 = Math.pow((x[j] -1), 3);
        //         p3 = Math.PI + p2;
        //         p4 = x[j] * x[j];
        //         p5 = Math.pow(p4, p3);
        //         p6 = Math.PI + p5;
        //         p7 = 0.5 / p6;
        //         p8 = Math.pow(p7, 3);
                
        //         System.out.printf("%.5f %.5f %.5f %.5f %.5f %.5f %.5f %.5f", p1, p2, p3, p4, p5, p6, p7, p8);
        //         break;
        //System.out.println(Arrays.deepToString(doubles));

        for (int i = 0; i < 9; i++){
            for (int j = 0; j < 18; j++){
                System.out.printf("%-10.5f ", doubles[i][j]);
            }
            //System.out.println();
            System.out.printf("\n");
        }

        }
    }