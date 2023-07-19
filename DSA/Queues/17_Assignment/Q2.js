int maxSubarraySumCircular(vector<int>& nums) {
    int n=nums.size();
    int max_sum=INT_MIN;
    int min_sum=INT_MAX;
    int sum=0;
    int max_end=0;
    int min_end=0;
    for(int i=0;i<n;i++){
        sum+=nums[i];
        max_end+=nums[i];
        min_end+=nums[i];
        if(max_end>max_sum){
            max_sum=max_end;
        }
        if(max_end<0){
            max_end=0;
        }
        if(min_end<min_sum){
            min_sum=min_end;
        }
        if(min_end>0){
            min_end=0;
        }
    }
    if(sum==min_sum){
        return max_sum;
    }
    return max(max_sum,sum-min_sum);
}