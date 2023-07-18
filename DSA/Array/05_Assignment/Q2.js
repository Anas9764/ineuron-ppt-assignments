function buildStaircase(n) {
    let count = 0;
    let coins = 1;
  
    while (n >= coins) {
      n -= coins;
      coins++;
      count++;
    }
  
    return count;
  }
  
  let n = 5;
  let result = buildStaircase(n);
  console.log(result);