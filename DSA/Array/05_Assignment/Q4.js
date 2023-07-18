function findDistinctElements(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
  
    let distinct1 = [...set1].filter((num) => !set2.has(num));
    let distinct2 = [...set2].filter((num) => !set1.has(num));
  
    return [distinct1, distinct2];
  }
  
  let nums1 = [1, 2, 3];
  let nums2 = [2, 4, 6];
  let result = findDistinctElements(nums1, nums2);
  console.log(result);