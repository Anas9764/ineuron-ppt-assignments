function findAnagrams(s, p) {
    const pFreq = {};
    const windowFreq = {};
    const result = [];
  
    for (let char of p) {
      pFreq[char] = (pFreq[char] || 0) + 1;
    }
  
    let left = 0;
    let right = 0;
    let matchCount = 0;
  
    while (right < s.length) {
      let rightChar = s[right];
  
      if (rightChar in pFreq) {
        windowFreq[rightChar] = (windowFreq[rightChar] || 0) + 1;
  
        if (windowFreq[rightChar] === pFreq[rightChar]) {
          matchCount++;
        }
      }
  
      while (right - left + 1 > p.length) {
        let leftChar = s[left];
  
        if (leftChar in pFreq) {
          windowFreq[leftChar]--;
  
          if (windowFreq[leftChar] === pFreq[leftChar] - 1) {
            matchCount--;
          }
        }
  
        left++;
      }
  
      if (matchCount === Object.keys(pFreq).length) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  let s = "cbaebabacd";
  let p = "abc";
  let result = findAnagrams(s, p);
  console.log(result);
  