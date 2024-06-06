
/**
 * Checks if there is a contiguous subarray within the given array that sums up to the target value
 * Time: O(n) and Space: O(1)
 * 
 * @param {number[]} arr - The array of integers to check
 * @param {number} target - The target sum to find within the array
 * @returns {boolean} - Returns true if such subarray exists and false otherwise.
 */
function hasSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
  
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        // Check if the current sum matches the target
        if (currentSum === target) {
            return true;
        }
    }

    // Return false if no subarray matches the target sum after checking all elements
    return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target));
