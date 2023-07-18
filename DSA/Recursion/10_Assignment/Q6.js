function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log("move disk 1 from rod " + source + " to rod " + destination);
      return 1;
    }
  
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log("move disk " + n + " from rod " + source + " to rod " + destination);
    towerOfHanoi(n - 1, auxiliary, source, destination);
  
    return Math.pow(2, n) - 1;
  }
  
  let N = 3;
  let result = towerOfHanoi(N, 1, 2, 3);
  console.log(result);