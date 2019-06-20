import java.util.*;

public class Main {

    static int[] rotLeft(int[] a, int d) {
      int pos = d;
      int[] res = new int[a.length];
      for (int x = 0; x < a.length; x++) {
        res[x] = a[pos];
        pos++;
        if (pos == a.length) {
          pos = 0;
        }
      }
      return res;
    }

    static int[] rotLeftCopy(int[] a, int d) {
      int[] res = new int[a.length];

      System.arraycopy(a, d, res, 0, a.length -d);
      System.arraycopy(a, 0, res, a.length -d, d);

      return res;
    }



    public static void main(String[] args) {

        System.out.println("Hello World! ");

        int arr[] = {41,73,89,7,10,1,59,58,84,77,77,97,58,1,86,58,26,10,86,51};
        int result[] = rotLeftCopy(arr, 10);

        System.out.println();
        System.out.println("Result: ");
        for (int x = 0; x < result.length ; x++) {
          System.out.println(result[x]);
        }
    }
}
