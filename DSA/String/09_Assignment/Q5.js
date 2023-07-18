function findMax(arr, n) {
    if (n === 1) {
      return arr[0];
    }
    
    return Math.max(arr[n - 1], findMax(arr, n - 1));
  }
  
  let arr = [1, 4, 3, -5, -4, 8, 6];
  let n = arr.length;
  let result = findMax(arr, n);
  console.log(result);
  