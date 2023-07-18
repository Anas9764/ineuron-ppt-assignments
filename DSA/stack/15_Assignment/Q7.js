class MinStack {
    public:
        /** initialize your data structure here. */
        stack<int> s;
        int minEle;
        MinStack() {
            minEle=INT_MAX;
        }
    
        void push(int val) {
            if(s.empty()){
                s.push(val);
                minEle=val;
            }
            else if(val>=minEle){
                s.push(val);
            }
            else{
                s.push(2*val-minEle);
                minEle=val;
            }
        }
    
        void pop() {
            if(s.top()>=minEle){
                s.pop();
            }
            else{
                minEle=2*minEle-s.top();
                s.pop();
            }
        }
    
        int top() {
            if(s.top()>=minEle){
                return s.top();
            }
            else{
                return minEle;
            }
        }
    
        int getMin() {
            return minEle;
        }
    };