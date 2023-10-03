import java.util.Scanner;

public class hammingCode {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.print("input a your code ");
        String a = sc.nextLine();
        System.out.println("You wrote " + a);
        char[] chars = a.toCharArray();
        int s1 = 0;
        int s2 = 0;
        int s3 = 0;

        for(int i = 0; i < a.length(); i+=2){
            s1 += Character.getNumericValue(chars[i]);
        }
        for(int i = 1; i < a.length(); i+=4){
            s2 += Character.getNumericValue(chars[i]) + Character.getNumericValue(chars[i+1]);
        }
        for(int i = 3; i < a.length(); i++){
            s3 += Character.getNumericValue(chars[i]);
        }
        s1 %= 2;
        s2 %= 2;
        s3 %= 2;                
        //System.out.println(s1 + " " + s2 + " " + s3);
        int s = s3*4 + s2*2 + s1;

        if (s == 1){
            System.out.println("error in r1");
            a = Integer.toString(1 - Character.getNumericValue(chars[0])) + a.substring(1);
        }
        if (s == 2){
            System.out.println("error in r2");
            a = chars[0] + Integer.toString(1 - Character.getNumericValue(chars[1])) + a.substring(2);
        }
        if (s == 3){
            System.out.println("error in i1");
            a = a.substring(0, 2) + Integer.toString(1 - Character.getNumericValue(chars[2])) + a.substring(3);   
        }     
        if (s == 4){
            System.out.println("error in r3");
            a = a.substring(0,4) + Integer.toString(1 - Character.getNumericValue(chars[3])) + a.substring(4); 
        }
        if (s == 5){
            System.out.println("error in i2");
            a = a.substring(0, 4) + Integer.toString((1 - Character.getNumericValue(chars[4]))) + a.substring(5);
        }

        if (s == 6){
            System.out.println("error in i3");
            a = a.substring(0, 5) + Integer.toString((1 - Character.getNumericValue(chars[5]))) + a.substring(6);
        }

        if (s == 7){
            System.out.println("error in i4");
            a = a.substring(0, 6) + Integer.toString((1 - Character.getNumericValue(chars[6])));
        }
        if (s == 0){
            System.out.println("no errors");
        }

        sc.close();
        System.out.println("correct output: " + a);
    }
}

