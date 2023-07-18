class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function str2tree(s) {
    if (s === '') {
      return null;
    }
  
    const stack = [];
    let num = '';
    let root = null;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        if (num !== '') {
          let node = new TreeNode(Number(num));
  
          if (stack.length > 0) {
            let parent = stack[stack.length - 1];
  
            if (!parent.left) {
              parent.left = node;
            } else {
              parent.right = node;
            }
          }
  
          stack.push(node);
          num = '';
        }
      } else if (s[i] === ')') {
        if (num !== '') {
          let node = new TreeNode(Number(num));
          let parent = stack[stack.length - 1];
  
          if (!parent.left) {
            parent.left = node;
          } else {
            parent.right = node;
          }
  
          num = '';
        }
  
        stack.pop();
      } else {
        num += s[i];
      }
    }
  
    if (num !== '') {
      root = new TreeNode(Number(num));
    }
  
    return root;
  }
  
  let s = "4(2(3)(1))(6(5))";
  let result = str2tree(s);
  console.log(result);