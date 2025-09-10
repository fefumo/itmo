#include <iostream>
#include <map>
#include <vector>

int main() {
  std::string str;
  std::map<std::string, int> cur;
  std::vector<std::map<std::string, int>> v;

  while (std::cin >> str) {
    if (str == "{") {
      v.emplace_back();
    } else if (str == "}") {
      if (!v.empty()) {
        for (const auto &[key, val] : v.back()) {
          cur[key] = val;
        }
        v.pop_back();
      }
    } else {
      size_t eq_pos = str.find('=');
      std::string var1 = str.substr(0, eq_pos);
      std::string value = str.substr(eq_pos + 1);

      if (isdigit(value[0]) || value[0] == '-') {
        if (!v.empty() && !v.back().count(var1)) {
          v.back()[var1] = cur[var1];
        }
        cur[var1] = std::stoi(value);
      } else {
        int assigned_value = cur[value];
        if (!v.empty() && !v.back().count(var1)) {
          v.back()[var1] = cur[var1];
        }
        cur[var1] = assigned_value;
        std::cout << assigned_value << "\n";
      }
    }
  }
  return 0;
}
