function arrangeCoins(n) {
    let k = 0;
    let sum = 0;
  
    while (sum <= n) {
      k++;
      sum += k;
    }
  
    return k - 1;
  }
  
  // Example usage:
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2 (Number of complete rows in the staircase)