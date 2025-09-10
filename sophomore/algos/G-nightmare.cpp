#include <bits/stdc++.h>

#include <cstdint>

using namespace std;
const uint8_t AlphabetLength = 26;

int main() {
  string str;
  cin >> str;

  vector<int> weights(AlphabetLength);
  for (int i = 0; i < AlphabetLength; i++) {
    cin >> weights[i];
  }

  map<char, int> char_count;
  for (char c : str) {
    char_count[c]++;
  }

  vector<pair<char, int>> sorted_chars;
  for (auto& [ch, count] : char_count) {
    sorted_chars.emplace_back(ch, weights[ch - 'a']);
  }

  sort(sorted_chars.begin(), sorted_chars.end(), [](pair<char, int> a, pair<char, int> b) {
    return a.second > b.second;
  });

  // cout << "sorted chars: \n";
  // for (auto &[ch, weight] : sorted_chars){
  //   printf("ch: %c, weight: %d\n", ch, weight);
  // }

  string result(str.size(), ' ');
  int start = 0;
  int end = str.size() - 1;

  int ptr_after_duplicates = count_if(char_count.begin(), char_count.end(), [](pair<char, int> p) {
    return p.second >= 2;
  });

  for (auto& [c, weight] : sorted_chars) {
    if (char_count[c] >= 2) {
      result[start] = c;
      result[end] = c;
      char_count[c] -= 2;
      start++;
      end--;
    }

    // if 1 symbol
    while (char_count[c] > 0) {
      result[ptr_after_duplicates] = c;
      ptr_after_duplicates++;
      char_count[c]--;
    }
  }

  cout << result << '\n';

  return 0;
}
