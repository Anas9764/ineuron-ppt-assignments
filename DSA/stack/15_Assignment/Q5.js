string reverseString(CQStack s){
    string ans="";
    while(!s.isEmpty()){
        ans+=s.pop();
    }
    return ans;
}