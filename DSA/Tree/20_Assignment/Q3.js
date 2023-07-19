bool isBST(int arr[], int n){
    if(n == 0){
        return true;
    }
    queue<pair<int, pair<int, int>>> q;
    q.push({arr[0], {INT_MIN, INT_MAX}});
    int i = 1;
    while(i < n){
      pair<int, pair<int, int>> temp = q.front();
      q.pop();
      if(arr[i] < temp.first && arr[i] > temp.second.first){
          q.push({arr[i], {temp.second.first, temp.first}});
          i++;
      }
      if(i < n && arr[i] > temp.first && arr[i] < temp.second.second){
          q.push({arr[i], {temp.first, temp.second.second}});
          i++;
      }
    }
    return true;
  }