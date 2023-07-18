function reverseWords(s) {
    let words = s.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }
  
    return words.join(' ');
  }
  
  let s = "Let's take LeetCode contest";
  let result = reverseWords(s);
  console.log(result);