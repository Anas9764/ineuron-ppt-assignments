function decodeString(s) {
    const stack = [];
    let currentNumber = 0;
    let currentString = '';
  
    for (let char of s) {
      if (char === '[') {
        stack.push(currentString);
        stack.push(currentNumber);
        currentString = '';
        currentNumber = 0;
      } else if (char === ']') {
        let num = stack.pop();
        let prevString = stack.pop();
        currentString = prevString + currentString.repeat(num);
      } else if (char >= '0' && char <= '9') {
        currentNumber = currentNumber * 10 + Number(char);
      } else {
        currentString += char;
      }
    }
  
    return currentString;
  }
  
  let s = "3[a]2[bc]";
  let result = decodeString(s);
  console.log(result);