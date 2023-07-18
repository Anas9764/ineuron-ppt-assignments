function sortedSquares(nums) {
    return nums.map((num) => num * num).sort((a, b) => a - b);
  }
  
  let nums = [-4, -1, 0, 3, 10];
  let result = sortedSquares(nums);
  console.log(result);