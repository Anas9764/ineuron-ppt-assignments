int reverse(int n){
    stack<int> s;
    while(n>0){
        s.push(n%10);
        n/=10;
    }
    int ans=0;
    int i=1;
    while(!s.empty()){
        ans+=i*s.top();
        s.pop();
        i*=10;
    }
    return ans;
}