void convert(Node* root, vector<Node*> &v, int &i){
    if(root == NULL){
      return;
    }
    convert(root->left, v, i);
    v.push_back(root);
    convert(root->right, v, i);
  }
  
  Node * bToDLL(Node *root)
  {
    vector<Node*> v;
    int i = 0;
    convert(root, v, i);
    for(int i = 0; i < v.size(); i++){
      if(i == 0){
          v[i]->left = NULL;
          v[i]->right = v[i+1];
      }
      else if(i == v.size()-1){
          v[i]->left = v[i-1];
          v[i]->right = NULL;
      }
      else{
          v[i]->left = v[i-1];
          v[i]->right = v[i+1];
      }
    }
    return v[0];
  }