import java.util.*;

public class Main {

    static int[] matchingStrings(String[] strings, String[] queries) {

      int[] res = new int[queries.length];

      for (int x = 0; x < queries.length ; x++) {
        int count = 0;
        for (String string : strings) {
          if (string.equals(queries[x])) count++;
        }
        res[x] = count;
      };
      return res;
    }

    public static void main(String[] args) {

      // String str[] = {"abcde","sdaklfj","asdjf","na","basdn","sdaklfj","asdjf","na","asdjf","na","basdn","sdaklfj","asdjf"};
      // String qry[] = {"abcde","sdaklfj","asdjf","na","basdn"};

      String str[] = {"aba","baba","aba","xzxb"};
      String qry[] = {"aba","xzxb","ab"};

      int result[] = matchingStrings(str, qry);

      System.out.println();
      System.out.println("Result: ");
      for (int x = 0; x < result.length ; x++) {
        System.out.println(result[x]);
      }
    }
}
