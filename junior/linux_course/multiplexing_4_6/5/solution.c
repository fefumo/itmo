#include <errno.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <sys/types.h>
#include <unistd.h>

#define REGION_SIZE 1000
#define COUNT_INTS 100

static int parse_key(const char *s, key_t *out) {
  char *end = NULL;
  unsigned long v = strtoul(s, &end, 10);
  if (!s[0] || *end != '\0')
    return -1;
  *out = (key_t)v;
  return 0;
}

int main(int argc, char *argv[]) {
  if (argc != 3) {
    fprintf(stderr, "usage: %s <key1> <key2>\n", argv[0]);
    return EXIT_FAILURE;
  }

  key_t k1, k2;
  if (parse_key(argv[1], &k1) || parse_key(argv[2], &k2)) {
    fprintf(stderr, "invalid key(s)\n");
    return EXIT_FAILURE;
  }

  int shmid1 = shmget(k1, 0, 0);
  if (shmid1 == -1) {
    perror("shmget key1");
    return EXIT_FAILURE;
  }
  int shmid2 = shmget(k2, 0, 0);
  if (shmid2 == -1) {
    perror("shmget key2");
    return EXIT_FAILURE;
  }

  void *addr1 = shmat(shmid1, NULL, 0);
  if (addr1 == (void *)-1) {
    perror("shmat key1");
    return EXIT_FAILURE;
  }
  void *addr2 = shmat(shmid2, NULL, 0);
  if (addr2 == (void *)-1) {
    perror("shmat key2");
    shmdt(addr1);
    return EXIT_FAILURE;
  }

  key_t kout = (key_t)-1;
  int shmid_out = -1, proj;
  for (proj = 1; proj <= 255; ++proj) {
    key_t cand = ftok(".", (int)proj);
    if (cand == (key_t)-1)
      continue;
    int id = shmget(cand, REGION_SIZE, IPC_CREAT | IPC_EXCL | 0600);
    if (id != -1) {
      kout = cand;
      shmid_out = id;
      break;
    } else if (errno != EEXIST) {
      continue;
    }
  }

  if (shmid_out == -1) {
    fprintf(stderr, "failed to create output segment\n");
    shmdt(addr1);
    shmdt(addr2);
    return EXIT_FAILURE;
  }

  void *addr_out = shmat(shmid_out, NULL, 0);
  if (addr_out == (void *)-1) {
    perror("shmat out");
    shmdt(addr1);
    shmdt(addr2);
    return EXIT_FAILURE;
  }

  int *a = (int *)addr1;
  int *b = (int *)addr2;
  int *c = (int *)addr_out;

  if (COUNT_INTS * (int)sizeof(int) > REGION_SIZE) {
    fprintf(stderr, "region too small for %d ints\n", COUNT_INTS);
    shmdt(addr1);
    shmdt(addr2);
    shmdt(addr_out);
    return EXIT_FAILURE;
  }
  int i;
  for (i = 0; i < COUNT_INTS; ++i) {
    c[i] = a[i] + b[i];
  }

  shmdt(addr1);
  shmdt(addr2);
  shmdt(addr_out);

  printf("%d\n", (int)kout);
  return EXIT_SUCCESS;
}
