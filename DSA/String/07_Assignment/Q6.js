function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    return (s + s).includes(goal);
  }
  
  let s = "abcde";
  let goal = "cdeab";
  let result = rotateString(s, goal);
  console.log(result);