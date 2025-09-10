#include <iostream>
#include <vector>

int main() {
  int num = 0;
  std::cin >> num;

  std::vector<int> input_numbers(num);
  for (int i = 0; i < num; i++) {
    std::cin >> input_numbers[i];
  }
  if (num < 3){
    if (num == 1){
      std::cout << "1 1";
    }
    else if (num == 2)
    {
      std::cout << "1 2";
    }
    else{
      std:: cout << "0 0";
    }
    return 0;
  }

  int start_index = 0;
  int end_index = 0;
  int max_len = 0;
  int count = 1;
  int start = 0;

  for (int end = 1; end < num; end++){
    if (input_numbers[end] == input_numbers[end-1]){
      count++;
    }
    else{
      count = 1;
    }
    if (count == 3){
      start = end - 1;
      count = 2;
    }
    if (end - start > max_len){
      max_len = end - start;
      start_index = start + 1;
      end_index = end + 1;
    }
  }
  std::cout << start_index << " " << end_index;
  return 0;
}
