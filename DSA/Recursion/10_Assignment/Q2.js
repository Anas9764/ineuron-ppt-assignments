function lastRemaining(n) {
    let leftToRight = true;
    let remaining = n;
    let step = 1;
    let head = 1;
  
    while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
        head = head + step;
      }
      remaining = Math.floor(remaining / 2);
      step = step * 2;
      leftToRight = !leftToRight;
    }
  
    return head;
  }
  
  let n = 9;
  let result = lastRemaining(n);
  console.log(result);
  