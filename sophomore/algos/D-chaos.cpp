#include <cctype>
#include <climits>
#include <iostream>

int main() {
  long long a, b, c, d, k;
  std::cin >> a >> b >> c >> d >> k;

  long long day = 1;
  long long cur_bacteria = a;
  long long prev = -1;

  while (day != k + 1) {
    prev = cur_bacteria;
    cur_bacteria = cur_bacteria * b;

    if (cur_bacteria < c) {
      cur_bacteria *= b;
      std::cout << "0\n";
      return 0;
    }

    cur_bacteria -= c;

    if (cur_bacteria > d) {
      cur_bacteria = d;
      break;
    }
    if (prev == cur_bacteria) {
      break;
    }

    day++;
  }
  std::cout << cur_bacteria << "\n";
  return 0;
}
