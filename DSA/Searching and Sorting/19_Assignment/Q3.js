class Solution {
    public:
      void mergeSort(vector<int>& nums, int l, int r){
        if(l >= r){
            return;
        }
        int mid = (l+r)/2;
        mergeSort(nums, l, mid);
        mergeSort(nums, mid+1, r);
        merge(nums, l, mid, r);
      }
      void merge(vector<int>& nums, int l, int mid, int r){
        int i = l;
        int j = mid+1;
        int k = 0;
        vector<int> temp(r-l+1);
        while(i <= mid && j <= r){
            if(nums[i] <= nums[j]){
                temp[k++] = nums[i++];
            }
            else{
                temp[k++] = nums[j++];
            }
        }
        while(i <= mid){
            temp[k++] = nums[i++];
        }
        while(j <= r){
            temp[k++] = nums[j++];
        }
        for(int i=l; i<=r; i++){
            nums[i] = temp[i-l];
        }
      }
      vector<int> sortArray(vector<int>& nums) {
        mergeSort(nums, 0, nums.size()-1);
        return nums;
      }
    };