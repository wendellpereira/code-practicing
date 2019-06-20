import java.util.*;

public class Main {

    static int[] reverseArrayFor(int[] a) {
      int[] resultArray = new int[a.length];
      int x = 0;
      for (int i = a.length -1; i > -1; i--) {
        resultArray[x] = a[i];
        x++;
      }
      return resultArray;
    }

    static int[] reverseArrayCollections(int[] a) {
        Collections.reverse(Arrays.asList(a));
        System.out.println(Arrays.asList(a));
        return a;
    }

    public static void main(String[] args) {

        System.out.println("Hello World! ");

        int arr[] = {2,3,4,1};
        int result[] = reverseArrayCollections(arr);

        System.out.println();
        System.out.println("Result: ");
        for (int x = 0; x < result.length ; x++) {
          System.out.println(result[x]);
        }
    }
}
