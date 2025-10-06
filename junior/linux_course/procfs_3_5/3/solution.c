#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
  int pid = atoi(argv[1]);
  int ppid = pid;

  printf("%d\n", pid);

  while (ppid != 1) {
    char path[BUFSIZ];

    sprintf(path, "/proc/%d/stat", pid);

    FILE *stat_file = fopen(path, "r");

    fscanf(stat_file, "%*d %*s %*c %d", &ppid);
    fclose(stat_file);
    pid = ppid;

    printf("%d\n", ppid);
  }

  return EXIT_SUCCESS;
}
