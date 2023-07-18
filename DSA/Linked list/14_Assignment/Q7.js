class Solution {
    public:
        vector<int> nextLargerNodes(ListNode* head) {
            vector<int> ans;
            stack<int> s;
            for(ListNode* curr = head; curr != NULL; curr = curr->next){
                    while(!s.empty() && ans[s.top()] < curr->val){
                            ans[s.top()] = curr->val;
                            s.pop();
                    }
                    s.push(ans.size());
                    ans.push_back(curr->val);
            }
            while(!s.empty()){
                    ans[s.top()] = 0;
                    s.pop();
            }
            return ans;
        }
    };