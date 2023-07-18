function reconstructPermutation(s) {
    const n = s.length;
    let perm = [];
    let left = 0;
    let right = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm.push(left);
        left++;
      } else {
        perm.push(right);
        right--;
      }
    }
  
    perm.push(left);
  
    return perm;
  }
  
  let s = 'IDID';
  let result = reconstructPermutation(s);
  console.log(result);