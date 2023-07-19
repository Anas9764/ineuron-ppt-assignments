class Solution {
    public:
      vector<int> countSmaller(vector<int>& nums) {
        vector<int> ans(nums.size());
        vector<pair<int, int>> v;
        for(int i=0; i<nums.size(); i++){
            v.push_back({nums[i], i});
        }
        mergeSort(v, 0, nums.size()-1, ans);
        return ans;
      }
      void mergeSort(vector<pair<int, int>>& v, int l, int r, vector<int>& ans){
        if(l >= r){
            return;
        }
        int mid = (l+r)/2;
        mergeSort(v, l, mid, ans);
        mergeSort(v, mid+1, r, ans);
        merge(v, l, mid, r, ans);
      }
      void merge(vector<pair<int, int>>& v, int l, int mid, int r, vector<int>& ans){
        int i = l;
        int j = mid+1;
        int k = 0;
        vector<pair<int, int>> temp(r-l+1);
        while(i <= mid && j <= r){
            if(v[i].first <= v[j].first){
                ans[v[i].second] += j-mid-1;
                temp[k++] = v[i++];
            }
            else{
                temp[k++] = v[j++];
            }
        }
        while(i <= mid){
            ans[v[i].second] += j-mid-1;
            temp[k++] = v[i++];
        }
        while(j <= r){
            temp[k++] = v[j++];
        }
        for(int i=l; i<=r; i++){
            v[i] = temp[i-l];
        }
      }
    };