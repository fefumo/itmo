#include <stddef.h>
#include <stdio.h>

int stringStat(const char *string, size_t multiplier, int *count) {
  int symbols = 0;
  while (*string != '\0') {
    symbols++;
    string++;
  }
  if (count)
    (*count)++;
  int result = symbols * multiplier;
  return result;
}
