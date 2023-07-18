function swap(str, i, j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
  
  function permute(str, l, r) {
    if (l === r) {
      console.log(str.join(""));
    } else {
      for (let i = l; i <= r; i++) {
        swap(str, l, i);
        permute(str, l + 1, r);
        swap(str, l, i);
      }
    }
  }
  
  let S = "ABC";
  let str = S.split("");
  permute(str, 0, str.length - 1);