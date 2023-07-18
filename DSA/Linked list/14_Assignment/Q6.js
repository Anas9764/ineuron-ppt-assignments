class Solution {
    public:
        Node* rotate(Node* head, int k) {
            Node* curr = head;
            while(curr->next){
                    curr = curr->next;
            }
            curr->next = head;
            curr = head;
            while(k--){
                    curr = curr->next;
            }
            head = curr->next;
            curr->next = NULL;
            return head;
        }
    };