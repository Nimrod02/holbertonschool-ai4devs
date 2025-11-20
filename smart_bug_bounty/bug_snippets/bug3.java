import java.util.*;

public class RuntimeBoom {
    static String normalizeTitle(String s) {
        // BUG: aucune protection contre null
        return s.trim().toUpperCase(Locale.ROOT);
    }

    public static void main(String[] args) {
        List<String> titles = new ArrayList<>();
        titles.add(" hello ");
        titles.add(null); // <- va faire NPE
        titles.add("world");

        for (String t : titles) {
            String n = normalizeTitle(t);
            System.out.println(n);
        }
    }
}