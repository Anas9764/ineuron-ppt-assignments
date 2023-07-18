function reverseStr(s, k) {
    let arr = s.split('');
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, arr.length - 1);
  
      while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
  
        start++;
        end--;
      }
    }
  
    return arr.join('');
  }
  
  let s = "abcdefg";
  let k = 2;
  let result = reverseStr(s, k);
  console.log(result);