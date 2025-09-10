#include <algorithm>
#include <iostream>
#include <queue>
#include <tuple>
#include <vector>

using namespace std;

#define INF 1e9

// Movement vectors: left, right, up, down
const int dx[] = {-1, 1, 0, 0};
const int dy[] = {0, 0, -1, 1};

int main() {
  int map_height, map_width, y_init, x_init, y_end, x_end;
  cin >> map_height >> map_width >> y_init >> x_init >> y_end >> x_end;

  // becuase array is 0-indexed and input is not
  y_init -= 1;
  x_init -= 1;
  x_end -= 1;
  y_end -= 1;

  if (x_init < 0 || y_init < 0 || x_init >= map_width || y_init >= map_height ||
      x_end < 0 || y_end < 0 || x_end >= map_width || y_end >= map_height) {
    cerr << "Start or end coordinates are out of bounds" << endl;
    return 1;
  }

  vector<vector<char>> map(map_height, vector<char>(map_width));
  // for output
  vector<vector<pair<int, int>>> parent(
      map_height, vector<pair<int, int>>(map_width, {-1, -1}));

  for (int i = 0; i < map_height; i++)
    for (int j = 0; j < map_width; j++)
      cin >> map[i][j];

  // vector for distances, all paths are `inf`
  vector<vector<int>> dist(map_height, vector<int>(map_width, INF));
  vector<vector<bool>> visited(map_height, vector<bool>(map_width, false));
  // tuple format: (distance, x, y)
  priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<>>
      pq;

  // initial distance for the first node is 0
  dist[y_init][x_init] = 0;
  pq.emplace(0, x_init, y_init);

  while (!pq.empty()) {
    auto [d, x, y] = pq.top();
    pq.pop();

    if (visited[y][x])
      continue;
    visited[y][x] = true;

    for (int dir = 0; dir < 4; dir++) {
      int nx = x + dx[dir];
      int ny = y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= map_width || ny >= map_height)
        continue;
      if (map[ny][nx] == '#')
        continue;

      int cost = (map[ny][nx] == 'W') ? 2 : 1;

      // if we have found a shorter path to the node
      if (dist[ny][nx] > dist[y][x] + cost) {
        // then update
        dist[ny][nx] = dist[y][x] + cost;
        parent[ny][nx] = {y, x};
        pq.emplace(dist[ny][nx], nx, ny);
      }
    }
  }

  if (dist[y_end][x_end] == INF) {
    cout << "-1" << endl;
  } else {
    cout << dist[y_end][x_end] << endl;

    string path;
    int curr_x = x_end, curr_y = y_end;

    while (!(curr_x == x_init && curr_y == y_init)) {
      auto [py, px] = parent[curr_y][curr_x];

      if (py == curr_y - 1 && px == curr_x)
        path += 'S';
      else if (py == curr_y + 1 && px == curr_x)
        path += 'N';
      else if (py == curr_y && px == curr_x - 1)
        path += 'E';
      else if (py == curr_y && px == curr_x + 1)
        path += 'W';

      curr_x = px;
      curr_y = py;
    }

    reverse(path.begin(), path.end());
    cout << path << endl;
  }

  return 0;
}
