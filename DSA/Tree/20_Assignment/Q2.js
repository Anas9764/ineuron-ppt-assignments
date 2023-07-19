Node* constructBST(int arr[], int n){
    if(n == 0){
        return NULL;
    }
    Node* root = new Node(arr[0]);
    queue<Node*> q;
    q.push(root);
    int i = 1;
    while(i < n){
      Node* temp = q.front();
      q.pop();
      if(arr[i] < temp->data){
          temp->left = new Node(arr[i]);
          q.push(temp->left);
          i++;
      }
      if(i < n && arr[i] > temp->data){
          temp->right = new Node(arr[i]);
          q.push(temp->right);
          i++;
      }
    }
    return root;
  }