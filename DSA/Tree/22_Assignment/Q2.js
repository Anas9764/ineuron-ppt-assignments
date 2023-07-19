void flip(Node* root){
    if(root == NULL){
      return;
    }
    flip(root->left);
    flip(root->right);
    if(root->left != NULL){
      Node* temp = root->left;
      root->left = root->right;
      root->right = temp;
    }
  }
  
  Node* solve(Node* root){
    flip(root);
    return root;
  }