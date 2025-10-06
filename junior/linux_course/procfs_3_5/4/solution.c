#include <ctype.h>
#include <dirent.h>
#include <linux/limits.h>
#include <stdio.h>
#include <stdlib.h>

int only_pids(const struct dirent *entry) {
  if (!entry)
    return 0;
  const char *s = entry->d_name;

  if (!s || !*s)
    return 0;

  for (; *s; s++) {
    if (!isdigit(*s)) {
      return 0;
    }
  }
  return 1;
}

int main(int argc, char *argv[]) {
  int target_pid = atoi(argv[1]);
  struct dirent **namelist = NULL;
  int n = scandir("/proc", &namelist, only_pids, NULL);

  int i;

  int *initial_pid_array = malloc(sizeof(int) * (n ? n : 1));
  int *initial_ppid_array = malloc(sizeof(int) * (n ? n : 1));

  if (!initial_pid_array || !initial_ppid_array) {
    perror("malloc");
    free(initial_pid_array);
    free(initial_ppid_array);
    for (i = 0; i < n; ++i)
      free(namelist[i]);
    free(namelist);
    return EXIT_FAILURE;
  }
  for (i = 0; i < n; ++i) {
    initial_pid_array[i] = -1;
    initial_ppid_array[i] = -1;
  }

  for (i = 0; i < n; i++) {
    char path[PATH_MAX];
    int ppid, pid_parsed;

    snprintf(path, sizeof(path), "/proc/%s/stat", namelist[i]->d_name);
    FILE *f = fopen(path, "r");
    if (!f) {
      free(namelist[i]);
      continue;
    }

    fscanf(f, "%d %*s %*c %d", &pid_parsed, &ppid);
    // fscanf(f, "%*d %*s %*c %d", &ppid);
    // printf("pid_parsed: %d,  ppid_parsed: %d\n", pid_parsed, ppid);
    // printf("ppid_parsed: %d\n", ppid);
    fclose(f);
    initial_pid_array[i] = pid_parsed;
    initial_ppid_array[i] = ppid;

    free(namelist[i]);
  }
  free(namelist);
  // return EXIT_SUCCESS;

  // -- BFS --

  char *visited = calloc(n ? n : 1, 1);
  int *queue = malloc(sizeof(int) * (n ? n : 1));
  int qh = 0, qt = 0, result = 0;

  if (!visited || !queue) {
    perror("alloc");
    free(visited);
    free(queue);
    free(initial_pid_array);
    free(initial_ppid_array);
    return EXIT_FAILURE;
  }

  queue[qt++] = target_pid;
  result = 1;

  while (qh < qt) {
    int cur_pid = queue[qh++];

    int idx;
    for (idx = 0; idx < n; ++idx) {
      if (initial_pid_array[idx] <= 0)
        continue;
      if (initial_ppid_array[idx] == cur_pid) {
        if (!visited[idx]) {
          visited[idx] = 1;
          queue[qt++] = initial_pid_array[idx];
          ++result;
        }
      }
    }
  }

  printf("%d\n", result);

  free(visited);
  free(queue);
  free(initial_pid_array);
  free(initial_ppid_array);

  return EXIT_SUCCESS;
}
