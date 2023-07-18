function distanceValue(arr1, arr2, d) {
    let count = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let hasCloseElement = false;
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          hasCloseElement = true;
          break;
        }
      }
      if (!hasCloseElement) {
        count++;
      }
    }
  
    return count;
  }
  
  let arr1 = [4, 5, 8];
  let arr2 = [10, 9, 1, 8];
  let d = 2;
  
  let result = distanceValue(arr1, arr2, d);
  console.log(result);