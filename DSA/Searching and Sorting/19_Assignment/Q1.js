class Solution {
    public:
      ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* head = NULL;
        ListNode* tail = NULL;
        priority_queue<pair<int, ListNode*>, vector<pair<int, ListNode*>>, greater<pair<int, ListNode*>>> pq;
        for(int i=0; i<lists.size(); i++){
            if(lists[i] != NULL){
                pq.push({lists[i]->val, lists[i]});
            }
        }
        while(!pq.empty()){
            pair<int, ListNode*> p = pq.top();
            pq.pop();
            if(p.second->next != NULL){
                pq.push({p.second->next->val, p.second->next});
            }
            if(head == NULL){
                head = p.second;
                tail = p.second;
            }
            else{
                tail->next = p.second;
                tail = tail->next;
            }
        }
        return head;
      }
    };