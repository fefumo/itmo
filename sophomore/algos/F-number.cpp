#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

bool compare(const string& a, const string& b) {
  return a + b > b + a;
}

string largestNumber(vector<string>& nums) {
  sort(nums.begin(), nums.end(), compare);

  string result;
  for (const string& num : nums) {
    result += num;
  }
  return result;
}

int main() {
  string str;
  vector<string> nums;

  while (cin >> str) {
    nums.push_back(str);
  }
  if (nums.size() == 1) {
    cout << nums[0] << endl;
    return 0;
  }

  cout << largestNumber(nums) << endl;
  return 0;
}
