function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry !== 0) {
      let sum = carry;
  
      if (i >= 0) {
        sum += Number(num1[i]);
        i--;
      }
      if (j >= 0) {
        sum += Number(num2[j]);
        j--;
      }
  
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
  
    return result;
  }
  
  let num1 = "11";
  let num2 = "123";
  let result = addStrings(num1, num2);
  console.log(result);