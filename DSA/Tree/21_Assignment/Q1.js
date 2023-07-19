void inorder(TreeNode* root, vector<int> &v){
    if(root == NULL){
        return;
    }
    inorder(root->left, v);
    v.push_back(root->val);
    inorder(root->right, v);
  }
  
  void convert(TreeNode* root, vector<int> &v, int &i){
    if(root == NULL){
        return;
    }
    convert(root->left, v, i);
    root->val = v[i];
    i++;
    convert(root->right, v, i);
  }
  
  TreeNode* solve(TreeNode* root){
    vector<int> v;
    inorder(root, v);
    sort(v.begin(), v.end());
    int i = 0;
    convert(root, v, i);
    return root;
  }