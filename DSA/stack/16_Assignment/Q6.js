queue<int> modifyQueue(queue<int> q, int k){
    stack<int> s;
    while(k--){
        s.push(q.front());
        q.pop();
    }
    while(!s.empty()){
        q.push(s.top());
        s.pop();
    }
    int n=q.size();
    while(n--){
        q.push(q.front());
        q.pop();
    }
    return q;
}