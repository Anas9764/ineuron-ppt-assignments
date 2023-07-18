function multiply(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    let result = new Array(m).fill().map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          result[i][j] += mat1[i][x] * mat2[x][j];
        }
      }
    }
  
    return result;
  }
  
  let mat1 = [[1, 0, 0], [-1, 0, 3]];
  let mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  let result = multiply(mat1, mat2);
  console.log(result);