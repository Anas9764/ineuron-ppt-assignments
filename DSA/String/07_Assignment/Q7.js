function backspaceCompare(s, t) {
    return buildString(s) === buildString(t);
  }
  
  function buildString(str) {
    let result = [];
  
    for (let char of str) {
      if (char === '#') {
        result.pop();
      } else {
        result.push(char);
      }
    }
  
    return result.join('');
  }
  
  let s = "ab#c";
  let t = "ad#c";
  let result = backspaceCompare(s, t);
  console.log(result);