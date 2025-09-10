#include <algorithm>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int n;
vector<vector<int>> fuel;

// Check strong connectivity using forward and reverse BFS
bool is_strongly_connected(int max_fuel) {
  vector<vector<int>> g(n), rg(n);

  // Build adjacency lists for original and reversed graphs
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
      if (fuel[i][j] <= max_fuel) {
        g[i].push_back(j);   // edge from i to j
        rg[j].push_back(i);  // reversed edge from j to i
      }
    }
  }

  // Lambda for BFS traversal
  auto bfs = [&](const vector<vector<int>>& graph) {
    vector<bool> visited(n, false);
    queue<int> q;
    q.push(0);
    visited[0] = true;

    while (!q.empty()) {
      int city = q.front();
      q.pop();
      for (int next : graph[city]) {
        if (!visited[next]) {
          visited[next] = true;
          q.push(next);
        }
      }
    }

    // Ensure all nodes are visited
    for (bool v : visited) {
      if (!v)
        return false;
    }
    return true;
  };

  // Must be reachable from and to every city
  return bfs(g) && bfs(rg);
}

int main() {
  cin >> n;
  fuel.resize(n, vector<int>(n));
  int low = 0, high = 0;

  // Read fuel matrix and determine maximum edge cost
  for (int i = 0; i < n; ++i)
    for (int j = 0; j < n; ++j) {
      cin >> fuel[i][j];
      if (i != j)
        high = max(high, fuel[i][j]);
    }

  int result = high;

  // Binary search to find the minimal sufficient fuel
  while (low <= high) {
    int mid = (low + high) / 2;
    if (is_strongly_connected(mid)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  cout << result << endl;
  return 0;
}
