int countWords(string str[], int n){
    stack<string> s;
    for(int i=0;i<n;i++){
        if(s.empty()){
            s.push(str[i]);
        }
        else{
            if(s.top()==str[i]){
                s.pop();
            }
            else{
                s.push(str[i]);
            }
        }
    }
    return s.size();
}