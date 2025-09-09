#include <assert.h>
#include <stdio.h>

#include "mem.h"
#include "tests.h"

// Individual test functions
static bool test_successful_allocation(void) {
  printf("Test: Successful allocation\n");
  void *ptr = _malloc(1024);
  if (!ptr) {
    printf("Failed to allocate memory.\n");
    return false;
  }
  printf("Allocated block: %p\n", ptr);
  _free(ptr);
  printf("Block freed.\n");
  printf("-------------------------\n");
  return true;
}

static bool test_free_one_block(void) {
  printf("Test: Free one block\n");
  void *a = _malloc(1024);
  void *b = _malloc(2048);
  if (!a || !b) {
    printf("Failed to allocate blocks.\n");
    return false;
  }
  printf("Allocated blocks: %p, %p\n", a, b);
  _free(a);
  printf("Freed block: %p\n", a);
  _free(b);
  printf("Freed block: %p\n", b);
  printf("-------------------------\n");
  return true;
}

static bool test_free_two_blocks(void) {
  printf("Test: Free two blocks\n");
  void *a = _malloc(1024);
  void *b = _malloc(2048);
  void *c = _malloc(3096);
  if (!a || !b || !c) {
    printf("Failed to allocate blocks.\n");
    return false;
  }
  printf("Allocated blocks: %p, %p, %p\n", a, b, c);
  _free(a);
  _free(c);
  printf("Freed blocks: %p, %p\n", a, c);
  _free(b);
  printf("Freed block: %p\n", b);
  printf("-------------------------\n");
  return true;
}

static void prepare_heap(){
  heap_init(2*1024);
}
static void destroy_heap(){
  heap_term();
}

// Structure for test descriptions
typedef bool (*test_func_t)(void);

struct test_description {
  const char *name;
  test_func_t func;
};

// Run all tests
bool run_all_tests(void) {
  struct test_description tests[] = {
      {"Successful Allocation", test_successful_allocation},
      {"Free One Block", test_free_one_block},
      {"Free Two Blocks", test_free_two_blocks},
  };
  prepare_heap();
  const size_t test_count = sizeof(tests) / sizeof(tests[0]);
  bool all_passed = true;

  for (size_t i = 0; i < test_count; ++i) {
    printf("Running: %s\n", tests[i].name);
    bool result = tests[i].func();
    if (!result) {
      printf("Test failed: %s\n", tests[i].name);
      all_passed = false;
    } else {
      printf("Test passed: %s\n", tests[i].name);
    }
    printf("=========================\n");
  }
  heap_term();
  return all_passed;
}
