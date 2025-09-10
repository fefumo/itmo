#include <climits>
#include <iostream>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <vector>

using namespace std;

int main() {
  int n, k, p, operations = 0;
  cin >> n >> k >> p;

  vector<int> sequence(p);
  priority_queue<pair<int, int>> heap;                // {next_use, car_id}
  unordered_map<int, queue<int>> next_use_positions;  // car, it's use in sequence
  unordered_map<int, int> current_next_use;           // car_id -> актуальное next_use
  unordered_set<int> cars_on_floor;

  for (int i = 0; i < p; ++i) {
    cin >> sequence[i];
    next_use_positions[sequence[i]].push(i);
  }

  for (int i = 0; i < p; ++i) {
    int car = sequence[i];
    next_use_positions[car].pop();

    int next_time = next_use_positions[car].empty() ? INT_MAX : next_use_positions[car].front();

    if (cars_on_floor.count(car)) {
      current_next_use[car] = next_time;
      heap.push({next_time, car});  // обновляем info в куче
      continue;
    }

    operations++;

    if ((int)cars_on_floor.size() < k) {
      current_next_use[car] = next_time;
      heap.push({next_time, car});
      cars_on_floor.insert(car);
    } else {
      while (!heap.empty()) {
        auto [future_time, candidate] = heap.top();
        heap.pop();

        if (!cars_on_floor.count(candidate))
          continue;
        if (current_next_use[candidate] != future_time)
          continue;

        cars_on_floor.erase(candidate);
        break;
      }

      current_next_use[car] = next_time;
      heap.push({next_time, car});
      cars_on_floor.insert(car);
    }
  }

  cout << operations << "\n";
  return 0;
}
