#include <climits>
#include <deque>
#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n, k;
  cin >> n >> k;
  deque<int> dq;
  vector<int> nums(n);
  for (auto i = 0; i < n; i++) {
    cin >> nums[i];
  }

  for (int i = 0; i < n; i++) {
    if (!dq.empty() && dq.front() <= i - k) {
      dq.pop_front();
    }
    while (!dq.empty() && nums[dq.back()] >= nums[i]) {
      dq.pop_back();
    }

    dq.push_back(i);

    if (i >= k - 1) {
      cout << nums[dq.front()] << " ";
    }
  }
  cout << endl;
  return 0;
}
