function subsets(str) {
    let subset = "";
  
    function generateSubsets(str, subset, i) {
      if (i === str.length) {
        console.log(subset);
        return;
      }
  
      generateSubsets(str, subset + str[i], i + 1);
      generateSubsets(str, subset, i + 1);
    }
  
    generateSubsets(str, subset, 0);
  }
  
  let set = "abc";
  subsets(set);