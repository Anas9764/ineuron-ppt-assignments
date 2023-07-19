int countStudents(vector<int>& students, vector<int>& sandwiches) {
    queue<int> q;
    for(int i=0;i<students.size();i++){
        q.push(students[i]);
    }
    int i=0;
    while(!q.empty()){
        if(q.front()==sandwiches[i]){
            q.pop();
            i++;
        }
        else{
            int x=q.front();
            q.pop();
            q.push(x);
        }
        if(i==sandwiches.size()){
            break;
        }
    }
    return q.size();
}