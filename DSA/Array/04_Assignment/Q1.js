function arraysIntersection(arr1, arr2, arr3) {
    const result = [];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
  
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
      const num1 = arr1[p1];
      const num2 = arr2[p2];
      const num3 = arr3[p3];
  
      if (num1 === num2 && num2 === num3) {
        result.push(num1);
        p1++;
        p2++;
        p3++;
      } else {
        const minVal = Math.min(num1, num2, num3);
        if (num1 === minVal) p1++;
        if (num2 === minVal) p2++;
        if (num3 === minVal) p3++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  const result = arraysIntersection(arr1, arr2, arr3);
  console.log(result); // Output: [1, 5] (Integers that appeared in all three arrays)