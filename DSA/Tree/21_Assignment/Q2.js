int findDist(Node* root, int a, int b){
    if(root == NULL){
        return 0;
    }
    if(root->data > a && root->data > b){
        return findDist(root->left, a, b);
    }
    if(root->data < a && root->data < b){
        return findDist(root->right, a, b);
    }
    if(root->data >= a && root->data <= b){
        return findDist(root, a) + findDist(root, b) - 2;
    }
  }
  
  int findDist(Node* root, int a){
    if(root == NULL){
        return 0;
    }
    if(root->data == a){
        return 0;
    }
    if(root->data > a){
        return 1 + findDist(root->left, a);
    }
    if(root->data < a){
        return 1 + findDist(root->right, a);
    }
  }