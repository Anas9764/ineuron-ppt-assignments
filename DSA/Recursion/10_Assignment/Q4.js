function stringLength(str) {
    if (str === "") {
      return 0;
    }
  
    return 1 + stringLength(str.substring(1));
  }
  
  let str = "abcd";
  let result = stringLength(str);
  console.log(result);