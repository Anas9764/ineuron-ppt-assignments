void merge(int arr1[], int arr2[], int n, int m) {
    int i = 0;
    int j = 0;
    while(i < n && j < m){
        if(arr1[i] <= arr2[j]){
            cout<<arr1[i++]<<" ";
        }
        else{
            cout<<arr2[j++]<<" ";
        }
    }
    while(i < n){
        cout<<arr1[i++]<<" ";
    }
    while(j < m){
        cout<<arr2[j++]<<" ";
    }
  }