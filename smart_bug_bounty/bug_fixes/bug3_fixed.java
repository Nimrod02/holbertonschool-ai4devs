import java.util.*;

public class RuntimeBoom {
    static Optional<String> normalizeTitle(String s) {
        // why: null-safe normalization; skip nulls to avoid NPE
        if (s == null) return Optional.empty();
        return Optional.of(s.trim().toUpperCase(Locale.ROOT));
    }

    public static void main(String[] args) {
        List<String> titles = Arrays.asList(" hello ", null, "world");
        for (String t : titles) {
            normalizeTitle(t).ifPresent(System.out::println);
        }
    }
}