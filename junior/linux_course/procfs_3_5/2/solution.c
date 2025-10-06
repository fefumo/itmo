#include <ctype.h>
#include <dirent.h>
#include <err.h>
#include <linux/limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int only_pids(const struct dirent *entry) {
  if (!entry)
    return 0;
  const char *s = entry->d_name;
  if (!s)
    return 0;
  for (; *s; s++) {
    if (!isdigit(*s))
      return 0;
  }
  return 1;
}

int main(int argc, char *argv[]) {
  struct dirent **namelist;
  int n = scandir("/proc", &namelist, only_pids, NULL);
  if (n < 0) {
    perror("scanir");
    return EXIT_FAILURE;
  }

  int result = 0;
  int i;
  for (i = 0; i < n; i++) {
    char path[PATH_MAX];
    snprintf(path, sizeof(path), "/proc/%s/comm", namelist[i]->d_name);

    FILE *f = fopen(path, "r");
    if (f) {
      char comm[256] = {0};
      if (fgets(comm, sizeof(comm), f)) {
        comm[strcspn(comm, "\n")] = 0;
        if (strcmp(comm, "genenv") == 0)
          result++;
      }
      fclose(f);
    }
    free(namelist[i]);
  }

  printf("%d\n", result);
  return 0;
}
