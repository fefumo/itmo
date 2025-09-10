#include <iostream>
#include <vector>
using namespace std;

inline char invert(int c) {
  return c == 1 ? 2 : 1;
}
bool is_bipartite = true;

void dfs(vector<int>& colors, vector<vector<int>>& graph, int v, int c) {
  colors[v] = c;
  for (int adj : graph[v]) {
    // if we havent met the node yet
    if (colors[adj] == 0) {
      dfs(colors, graph, adj, invert(c));
    }
    // if the the adjacent node is the same color as the current
    else if (colors[adj] == c) {
      is_bipartite = false;
      return;
    }
  }
}

void doDfs(vector<vector<int>>& graph, int n) {
  vector<int> colors(n + 1, 0);
  for (int i = 1; i <= n; i++) {
    if (colors[i] == 0)
      dfs(colors, graph, i, 1);  // let 1 be the initial color
  }
}

int main() {
  int n;  // number of vertices
  int lines;
  cin >> n >> lines;
  vector<vector<int>> g(n + 1);  // 1-based indexing
  int first, second;
  for (int i = 0; i < lines; i++) {
    cin >> first >> second;

    g[first].push_back(second);
    g[second].push_back(first);
  }

  doDfs(g, n);

  cout << (is_bipartite ? "YES" : "NO") << endl;
  return 0;
}
