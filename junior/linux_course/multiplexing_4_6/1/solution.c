#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
  if (argc < 3) {
    fprintf(stderr, "usage: %s <cmd> <number>\n", argv[0]);
    return EXIT_FAILURE;
  }

  char input[BUFSIZ];
  int n = snprintf(input, sizeof input, "%s %d", argv[1], atoi(argv[2]));

  FILE *f = popen(input, "r");
  if (!f) {
    perror("popen");
    return EXIT_FAILURE;
  }

  int ch;
  int count = 0;
  while ((ch = fgetc(f)) != EOF) {
    if (ch == '0')
      count++;
  }

  if (pclose(f) == -1) {
    perror("pclose");
    return EXIT_FAILURE;
  }

  printf("%d\n", count);
  return EXIT_SUCCESS;
}
