function power(N, P) {
    if (P === 0) {
      return 1;
    }
    
    if (P === 1) {
      return N;
    }
    
    return N * power(N, P - 1);
  }
  
  let N = 5;
  let P = 2;
  let result = power(N, P);
  console.log(result);
  