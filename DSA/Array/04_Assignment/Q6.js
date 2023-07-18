function sortedSquares(nums) {
    const squared = nums.map(num => num ** 2);
    squared.sort((a, b) => a - b);
    return squared;
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100] (Array of squares sorted in non-decreasing order)