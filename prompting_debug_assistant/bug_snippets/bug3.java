// Intended: Print the 3rd element of the array (intentional out-of-bounds bug)
public class Bug3 {
  public static void main(String[] args) {
    int[] nums = {10, 20};
    System.out.println("Array length: " + nums.length);
    // The following line intentionally accesses index 2 which is out of bounds
    System.out.println(nums[2]);
    System.out.println("This line will not be executed due to the exception above.");
  }
}// Buggy: Accessing an out-of-bounds index in the array
