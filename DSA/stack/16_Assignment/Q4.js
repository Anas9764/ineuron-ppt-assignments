bool checkSorted(int n, int arr[]){
    stack<int> s;
    queue<int> q;
    for(int i=0;i<n;i++){
        q.push(arr[i]);
    }
    int expected=1;
    while(!q.empty()){
        if(q.front()==expected){
            q.pop();
            expected++;
        }
        else{
            if(s.empty()){
                s.push(q.front());
                q.pop();
            }
            else if(!s.empty() && s.top()<q.front()){
                return false;
            }
            else{
                s.push(q.front());
                q.pop();
            }
        }
    }
    while(!s.empty()){
        if(s.top()==expected){
            s.pop();
            expected++;
        }
        else{
            return false;
        }
    }
    return true;
}