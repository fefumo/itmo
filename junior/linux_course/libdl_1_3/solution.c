#include <dlfcn.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>

int (*someSecretFunctionPrototype)(int);

bool init_library(const char *lib, const char *function) {
  void *hdl = dlopen(lib, RTLD_LAZY);
  if (hdl == NULL)
    return false;

  someSecretFunctionPrototype = (int (*)(int))dlsym(hdl, function);

  if (someSecretFunctionPrototype == NULL)
    return false;

  return true;
}

int main(int argc, char *argv[]) {
  const char *lib = argv[1];
  const char *function = argv[2];
  int num = atoi(argv[3]);

  if (init_library(lib, function)) {
    int result = someSecretFunctionPrototype(num);
    printf("%d\n", result);
  } else {
    printf("library was not loaded");
  }

  return 0;
}
