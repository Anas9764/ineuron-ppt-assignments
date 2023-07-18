function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
  
    for (let j = 0; j < cols; j++) {
      transposed[j] = [];
      for (let i = 0; i < rows; i++) {
        transposed[j][i] = matrix[i][j];
      }
    }
  
    return transposed;
  }
  
  // Example usage:
  const matrix = [[1, 2, 3], [4, 5, 6]];
  const result = transpose(matrix);
  console.log(result); // Output: [[1, 4], [2, 5], [3, 6]] (Transposed matrix)