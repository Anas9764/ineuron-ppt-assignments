function countConsonants(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
  
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase()) && str[i].match(/[a-z]/i)) {
        count++;
      }
    }
  
    return count;
  }
  
  let str = "Hello World";
  let result = countConsonants(str);
  console.log(result);