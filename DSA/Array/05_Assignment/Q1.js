function convertTo2DArray(original, m, n) {
    if (original.length !== m * n) {
      return [];
    }
  
    let result = [];
    for (let i = 0; i < m; i++) {
      let row = original.slice(i * n, (i + 1) * n);
      result.push(row);
    }
  
    return result;
  }
  
  let original = [1, 2, 3, 4, 5, 6];
  let m = 2;
  let n = 3;
  
  let result = convertTo2DArray(original, m, n);
  console.log(result);