int findMaxDiff(int arr[], int n){
    int ans=0;
    stack<int> s;
    vector<int> left(n);
    vector<int> right(n);
    for(int i=0;i<n;i++){
        while(!s.empty() && s.top()>=arr[i]){
            s.pop();
        }
        if(s.empty()){
            left[i]=0;
        }
        else{
            left[i]=s.top();
        }
        s.push(arr[i]);
    }
    while(!s.empty()){
        s.pop();
    }
    for(int i=n-1;i>=0;i--){
        while(!s.empty() && s.top()>=arr[i]){
            s.pop();
        }
        if(s.empty()){
            right[i]=0;
        }
        else{
            right[i]=s.top();
        }
        s.push(arr[i]);
    }
    for(int i=0;i<n;i++){
        ans=max(ans,abs(left[i]-right[i]));
    }
    return ans;
}