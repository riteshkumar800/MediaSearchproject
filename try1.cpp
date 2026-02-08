#include<bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
         vector<int>v,v1;
        for(int i=0;i<n;i++){
            int x;
            cin>>x;
            v.push_back(x);
            v1.push_back(x);

        }

        sort(v1.begin(),v1.end());
        int ans=0;
        for(int i=0;i<n;i++){
            ans=max(ans,abs(v[i]-v1[i]));

        }
        if(ans==0) ans=-1;
        cout<<ans<<endl;



        // vector<int>arr;

    }
}