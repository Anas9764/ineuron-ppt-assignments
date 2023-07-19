class Solution{
    public:
    static bool comp(vector<int>& a,vector<int>& b){
      if(a[0]==b[0]) return a[1]<b[1];
      return a[0]<b[0];
    }
    int findMinArrowShots(vector<vector<int>>& points) {
      int n=points.size();
      if(n<=1) return 1;
      sort(points.begin(),points.end(),comp);
      int last=points[0][1];
      int ans=1;
      for(int i=1;i<n;i++){
          if(points[i][0]>last){
              ans++;
              last=points[i][1];
          }
          last=min(last,points[i][1]);
      }
      return ans;
    }
  }