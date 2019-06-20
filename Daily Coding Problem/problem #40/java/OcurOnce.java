import java.util.*;

public class OcurOnce {

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {

    System.out.print("Enter the array space-separated: ");

    String[] line = scanner.nextLine().split(" ");

    Map <String, Integer> map = new HashMap <String, Integer>();

    for (String item : line) {
      map.put(item, map.containsKey(item) ? map.get(item) +1 : 1);
    }

    System.out.println("Ocur onec: " + map.containsValue(1));


  }

}
