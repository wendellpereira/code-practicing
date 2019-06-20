// import com.sun.deploy.util.ArrayUtil;
// import com.sun.scenario.effect.FloatMap;
// import com.sun.tools.javac.util.ArrayUtils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {

    static int hourGlassSum(int[][] arr) {
        int[] sumArray = new int[16];
        int count = 0;
        int sum = 0;
        for (int i = 0; i < 4; i++) {
            for (int j = 1; j < 5; j++) {
                sum = arr[i][j-1] + arr[i][j] + arr[i][j+1];
                sum += arr[i+1][j];
                sum += arr[i+2][j-1] + arr[i+2][j] + arr[i+2][j+1];

                System.out.println(arr[i][j-1] + " " + arr[i][j] + " " + arr[i][j+1]);
                System.out.println(arr[i+1][j]);
                System.out.println(arr[i+2][j-1] + " " + arr[i+2][j] + " " + arr[i+2][j]);

                sumArray[count] = sum;
                count++;

                System.out.println("sum: "+ sum);
                System.out.println();
                System.out.println("------");
            }
        }
//        System.out.println("final array: ");
//        for (int x =0; x < 16; x++) {
//            System.out.println(sumArray[x]);
//        }
        return Arrays.stream(sumArray).reduce((x,y) -> x > y ? x : y).getAsInt();
    }

    public static void main(String[] args) {

        for (String s : args) {
            System.out.println(s);
        }

        int[][] arr = new int[6][6];
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                int arrItem =  (int)(Math.random() * 10);
                arr[i][j] = arrItem;
            }
        }

        int result = hourGlassSum(arr);

        System.out.println();
        System.out.println("Result: "+ result);
    }
}
