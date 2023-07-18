function countSubstrings(S) {
    let count = 0;
  
    for (let i = 0; i < S.length; i++) {
      let distinctChars = new Set();
  
      for (let j = i; j < S.length; j++) {
        if (distinctChars.has(S[j])) {
          count++;
        } else {
          distinctChars.add(S[j]);
        }
      }
    }
  
    return count;
  }
  
  let S = "abcab";
  let result = countSubstrings(S);
  console.log(result);