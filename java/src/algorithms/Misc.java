package algorithms;

public class Misc {

    public static void main(String[] args) {
        runBinarySearchIteratively(new int[]{1,2,3,4,6,8}, 9, 0, 5);
    }

    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }

    public static int runBinarySearchIteratively(int[] sortedArray, int key, int low, int high) {
        int index = Integer.MAX_VALUE;

        int mid = 0;
        while (low <= high) {
            mid = (low + high) / 2;
            if (sortedArray[mid] < key) {
                low = mid + 1;
            } else if (sortedArray[mid] > key) {
                high = mid - 1;
            } else if (sortedArray[mid] == key) {
                index = mid;
                break;
            }
        }
        return index;
    }
}
