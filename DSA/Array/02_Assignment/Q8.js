/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and
change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You
can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in
nums.

Return the minimum score of nums after applying the mentioned operation at most
once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/


/* 
    TC:O(NlogN)
    SC:O(1)
*/

function minDifference(nums, k) {
    const n = nums.length;
    
    if (n <= 4) {
      return 0;
    }
    
    nums.sort((a, b) => a - b);
    
    let minScore = nums[n - 1] - nums[0];
    
    for (let i = 0; i < 4; i++) {
      const low = nums[i];
      const high = nums[n - (4 - i)];
      
      minScore = Math.min(minScore, high - low);
    }
    
    return minScore;
  }
  
  // Example usage:
  const nums = [5, 3, 2, 4];
  const k = 1;
  const result = minDifference(nums, k);
  console.log(result); // Output: 0 (The minimum score is 0 after adjusting the elements)