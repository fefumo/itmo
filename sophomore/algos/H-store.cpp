#include <bits/stdc++.h>

#include <cstdio>
#include <cstring>
#include <sstream>
#include <vector>

using namespace std;

int main() {
  int n = 0;
  int k = 0;
  cin >> n >> k;
  vector<int> nums;
  string input;
  cin.ignore(256, '\n');
  getline(cin, input);
  stringstream ss(input);
  int num;

  while (ss >> num) {
    nums.push_back(num);
  }

  sort(nums.rbegin(), nums.rend());

  int sum_of_items_to_remove = 0;
  for (size_t i = k - 1; i < nums.size(); i += k) {
    int item = nums[i];
    sum_of_items_to_remove += item;
  }
  int initial_sum = accumulate(nums.begin(), nums.end(), 0);
  cout << initial_sum - sum_of_items_to_remove << endl;
  return 0;
}
