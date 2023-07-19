class DataStream {
    public:
        int value;
        int k;
        vector<int> v;
        DataStream(int value, int k) {
            this->value=value;
            this->k=k;
        }
    
        bool consec(int num) {
            v.push_back(num);
            if(v.size()<k){
                return false;
            }
            for(int i=v.size()-1;i>v.size()-k-1;i--){
                if(v[i]!=value){
                    return false;
                }
            }
            return true;
        }
    };