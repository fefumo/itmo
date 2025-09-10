#include <iostream>
#include <list>

using std::cin;
using std::cout;
using std::list;

struct GoblinQueue {
  list<int> front;
  list<int> back;
  int total_count = 0;

  void balance() {
    while (front.size() < back.size()) {
      front.push_back(back.front());
      back.pop_front();
    }
  }

  void insert_common(int value) {
    back.push_back(value);
    total_count++;
    balance();
  }

  void insert_vip(int value) {
    if (total_count % 2 == 0) {
      front.push_back(value);
    } else {
      back.push_front(value);
    }
    total_count++;
  }

  int remove_first() {
    int result = front.front();
    front.pop_front();
    total_count--;
    balance();
    return result;
  }

  void add(int value, bool is_vip) {
    if (is_vip) {
      insert_vip(value);
    } else {
      insert_common(value);
    }
  }
};

int main() {
  int command_count;
  cin >> command_count;

  GoblinQueue queue;

  for (int i = 0; i < command_count; ++i) {
    char operation;
    cin >> operation;

    if (operation == '-') {
      cout << queue.remove_first() << '\n';
    } else {
      int id;
      cin >> id;
      bool vip = (operation == '*');
      queue.add(id, vip);
    }
  }

  return 0;
}
