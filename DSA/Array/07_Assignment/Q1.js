function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    let sMap = new Map();
    let tMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      let sChar = s[i];
      let tChar = t[i];
  
      if ((sMap.has(sChar) && sMap.get(sChar) !== tChar) || (tMap.has(tChar) && tMap.get(tChar) !== sChar)) {
        return false;
      }
  
      sMap.set(sChar, tChar);
      tMap.set(tChar, sChar);
    }
  
    return true;
  }
  
  let s = "egg";
  let t = "add";
  let result = isIsomorphic(s, t);
  console.log(result);