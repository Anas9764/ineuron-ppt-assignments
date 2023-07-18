/*
Question 1
Given an integer array nums of length n and an integer target, find three
integers in nums such that the sum is closest to the target. Return the sum of
the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === target) {
          return sum;
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return closestSum;
  }
  
  // Example usage:
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2 (The closest sum to the target 1 is 2)