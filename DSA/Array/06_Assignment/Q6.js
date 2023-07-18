function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    let count = new Map();
    for (let num of changed) {
      count.set(num, (count.get(num) || 0) + 1);
    }
  
    let original = [];
    changed.sort((a, b) => a - b);
  
    for (let num of changed) {
      if (count.get(num) === 0) {
        continue;
      }
  
      let twice = num * 2;
      if (count.get(twice) === undefined || count.get(twice) === 0) {
        return [];
      }
  
      count.set(num, count.get(num) - 1);
      count.set(twice, count.get(twice) - 1);
      original.push(num);
    }
  
    return original;
  }
  
  let changed = [1, 3, 4, 2, 6, 8];
  let result = findOriginalArray(changed);
  console.log(result);