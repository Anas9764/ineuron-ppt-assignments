void convert(Node* root, Node* &head, Node* &prev){
    if(root == NULL){
        return;
    }
    convert(root->left, head, prev);
    if(prev == NULL){
        head = root;
    }
    else{
        root->left = prev;
        prev->right = root;
    }
    prev = root;
    convert(root->right, head, prev);
  }
  
  Node* bToDLL(Node* root){
    Node* head = NULL;
    Node* prev = NULL;
    convert(root, head, prev);
    return head;
  }