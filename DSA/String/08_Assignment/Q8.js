function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      let charCount = {};
  
      for (let char of s) {
        if (charCount[char]) {
          return true;
        }
        charCount[char] = true;
      }
  
      return false;
    }
  
    let first = -1;
    let second = -1;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        if (first === -1) {
          first = i;
        } else if (second === -1) {
          second = i;
        } else {
          return false;
        }
      }
    }
  
    return (
      second !== -1 &&
      s[first] === goal[second] &&
      s[second] === goal[first] 
    );
  }
  
  let s = "abcd";
  let goal = "cbad";
  let result = buddyStrings(s, goal);
  console.log(result);