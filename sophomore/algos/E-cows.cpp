#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

bool can_place_cows(vector<int>& stalls, int min_dist, int k) {
  int count = 1;
  int last_pos = stalls[0];

  for (size_t i = 1; i < stalls.size(); i++) {
    if (stalls[i] - last_pos >= min_dist) {
      count++;
      last_pos = stalls[i];
      if (count == k) {
        return true;
      }
    }
  }
  return false;
}

int main() {
  int N, K;
  cin >> N >> K;

  vector<int> stalls(N);
  for (int i = 0; i < N; i++) {
    cin >> stalls[i];
  }

  int result = 1;
  int left = 0;
  int right = stalls[stalls.size() - 1] - stalls[0];

  while (left <= right) {
    int middle = (left + right) / 2;
    if (can_place_cows(stalls, middle, K)) {
      result = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  cout << result;
  return 0;
}
