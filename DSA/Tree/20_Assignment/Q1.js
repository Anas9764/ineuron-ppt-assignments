int maxSum(Node* root, int &ans){
    if(root == NULL){
        return 0;
    }
    int l = maxSum(root->left, ans);
    int r = maxSum(root->right, ans);
    int temp = max(max(l, r) + root->data, root->data);
    int res = max(temp, l + r + root->data);
    ans = max(ans, res);
    return temp;
}

int findLargestSubtreeSum(Node* root){
    int ans = INT_MIN;
    maxSum(root, ans);
    return ans;
}