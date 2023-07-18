/*
Question 5
Given an integer array nums, find three numbers whose product is maximum and
return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

/* 
    TC:O(NlogN)
    SC:O(1)
*/

function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    
    // Case 1: All positive numbers
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  
    // Case 2: Negative numbers present
    const product2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(product1, product2);
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4];
  const result = maximumProduct(nums);
  console.log(result); // Output: 24 (Maximum product: 2 * 3 * 4)