#include "tests.h"
#include <stdio.h>

int main(void) {
  printf("running own_tests\n");
  if (run_all_tests()) {
    printf("All tests passed successfully.\n");
  } else {
    printf("Some tests failed. Check the output for details.\n");
  }
  return 0;
}
