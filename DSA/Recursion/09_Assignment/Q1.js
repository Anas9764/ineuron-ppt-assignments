function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
    
    return (n & (n - 1)) === 0;
  }
  
  let n = 16;
  let result = isPowerOfTwo(n);
  console.log(result);