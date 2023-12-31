vector<int> findClosestElements(vector<int>& arr, int k, int x) {
    int n = arr.size();
    int low = 0, high = n-1;
    while(high-low >= k){
      if(abs(arr[low]-x) > abs(arr[high]-x)){
        low++;
      }
      else{
        high--;
      }
    }
    vector<int> ans;
    for(int i = low; i <= high; i++){
      ans.push_back(arr[i]);
    }
    return ans;
  }