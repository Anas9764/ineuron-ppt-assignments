function compress(chars) {
    let write = 0;
    let count = 1;
  
    for (let i = 1; i <= chars.length; i++) {
      if (i === chars.length || chars[i] !== chars[i - 1]) {
        chars[write] = chars[i - 1];
        write++;
  
        if (count > 1) {
          let countStr = count.toString();
  
          for (let j = 0; j < countStr.length; j++) {
            chars[write] = countStr[j];
            write++;
          }
        }
  
        count = 1;
      } else {
        count++;
      }
    }
  
    return write;
  }
  
  let chars = ["a", "a", "b", "b", "c", "c", "c"];
  let result = compress(chars);
  console.log(result);
  console.log(chars.slice(0, result));