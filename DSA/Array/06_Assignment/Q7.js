function generateMatrix(n) {
    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;
  
    while (top <= bottom && left <= right) {
      // Fill top row
      for (let col = left; col <= right; col++) {
        matrix[top][col] = num++;
      }
      top++;
  
      // Fill right column
      for (let row = top; row <= bottom; row++) {
        matrix[row][right] = num++;
      }
      right--;
  
      // Fill bottom row
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = num++;
      }
      bottom--;
  
      // Fill left column
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  let n = 3;
  let result = generateMatrix(n);
  console.log(result);