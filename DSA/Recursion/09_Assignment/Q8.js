function productOfArray(arr) {
    let product = 1;
    
    for (let num of arr) {
      product *= num;
    }
    
    return product;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let result = productOfArray(arr);
  console.log(result);