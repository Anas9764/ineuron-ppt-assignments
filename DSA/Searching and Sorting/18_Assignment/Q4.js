class Solution {
    public:
      int maximumGap(vector<int>& nums) {
        int n = nums.size();
        if(n < 2) return 0;
        int maxNum = *max_element(nums.begin(), nums.end());
        int minNum = *min_element(nums.begin(), nums.end());
        int bucketSize = max(1, (maxNum - minNum) / (n - 1));
        int bucketNum = (maxNum - minNum) / bucketSize + 1;
        vector<int> bucketMin(bucketNum, INT_MAX);
        vector<int> bucketMax(bucketNum, INT_MIN);
        for(int i = 0; i < n; i++) {
            int bucketIdx = (nums[i] - minNum) / bucketSize;
            bucketMin[bucketIdx] = min(bucketMin[bucketIdx], nums[i]);
            bucketMax[bucketIdx] = max(bucketMax[bucketIdx], nums[i]);
        }
        int ans = 0;
        int prev = minNum;
        for(int i = 0; i < bucketNum; i++) {
            if(bucketMin[i] == INT_MAX && bucketMax[i] == INT_MIN) continue;
            ans = max(ans, bucketMin[i] - prev);
            prev = bucketMax[i];
        }
        return ans;
      }
    };