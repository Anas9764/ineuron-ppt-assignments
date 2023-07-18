function findMaxLength(nums) {
    const n = nums.length;
    let maxLength = 0;
    let count = 0;
    let countMap = new Map();
    countMap.set(0, -1);
  
    for (let i = 0; i < n; i++) {
      if (nums[i] === 0) {
        count--;
      } else {
        count++;
      }
  
      if (countMap.has(count)) {
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  let nums = [0, 1];
  let result = findMaxLength(nums);
  console.log(result);