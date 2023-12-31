vector<int> nextGreaterFrequency(vector<int> arr, int n){
    vector<int> ans(n);
    stack<int> s;
    unordered_map<int,int> m;
    for(int i=0;i<n;i++){
        m[arr[i]]++;
    }
    for(int i=n-1;i>=0;i--){
        while(!s.empty() && m[s.top()]<=m[arr[i]]){
            s.pop();
        }
        if(s.empty()){
            ans[i]=-1;
        }
        else{
            ans[i]=s.top();
        }
        s.push(arr[i]);
    }
    return ans;
}