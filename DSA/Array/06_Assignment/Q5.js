function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
  
    let minProductSum = 0;
    for (let i = 0; i < nums1.length; i++) {
      minProductSum += nums1[i] * nums2[i];
    }
  
    return minProductSum;
  }
  
  let nums1 = [5, 3, 4, 2];
  let nums2 = [4, 2, 2, 5];
  let result = minProductSum(nums1, nums2);
  console.log(result);