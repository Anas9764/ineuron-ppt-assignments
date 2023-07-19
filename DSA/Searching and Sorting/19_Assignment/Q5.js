void rearrange(int arr[], int n) {
    int i = 0;
    int j = n-1;
    while(i < j){
        while(i < n && arr[i] > 0){
            i++;
        }
        while(j >= 0 && arr[j] < 0){
            j--;
        }
        if(i < j){
            swap(arr[i], arr[j]);
        }
    }
    if(i == 0 || i == n){
        return;
    }
    int k = 0;
    while(k < n && i < n){
        swap(arr[k], arr[i]);
        k += 2;
        i++;
    }
  }