vector<string> topKFrequent(vector<string>& words, int k) {
    unordered_map<string, int> mp;
    for(int i = 0; i < words.size(); i++){
      mp[words[i]]++;
    }
    priority_queue<pair<int, string>> pq;
    for(auto it = mp.begin(); it != mp.end(); it++){
      pq.push({it->second, it->first});
    }
    vector<string> ans;
    while(k--){
      ans.push_back(pq.top().second);
      pq.pop();
    }
    return ans;
  }