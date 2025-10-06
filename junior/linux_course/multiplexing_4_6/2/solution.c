#include <errno.h>
#include <fcntl.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/select.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>

int main(void) {
  int f1 = open("./in1", O_RDONLY);
  int f2 = open("./in2", O_RDONLY);
  if (f1 == -1 || f2 == -1) {
    perror("open");
    if (f1 != -1)
      close(f1);
    if (f2 != -1)
      close(f2);
    return EXIT_FAILURE;
  }

  long long sum = 0;
  bool open1 = true, open2 = true;

  while (open1 || open2) {
    fd_set read_set;
    FD_ZERO(&read_set);
    int maxfd = -1;

    if (open1) {
      FD_SET(f1, &read_set);
      if (f1 > maxfd)
        maxfd = f1;
    }
    if (open2) {
      FD_SET(f2, &read_set);
      if (f2 > maxfd)
        maxfd = f2;
    }

    int rc = select(maxfd + 1, &read_set, NULL, NULL, NULL);
    if (rc < 0) {
      if (errno == EINTR)
        continue;
      perror("select");
      break;
    }

    if (open1 && FD_ISSET(f1, &read_set)) {
      char buf[64];
      ssize_t n = read(f1, buf, sizeof(buf) - 1);
      if (n > 0) {
        buf[n] = '\0';
        sum += atoll(buf);
      } else if (n == 0) {
        // writer(s) closed in1
        open1 = false;
        close(f1);
      } else if (errno != EINTR) {
        perror("read in1");
        break;
      }
    }

    if (open2 && FD_ISSET(f2, &read_set)) {
      char buf[64];
      ssize_t n = read(f2, buf, sizeof(buf) - 1);
      if (n > 0) {
        buf[n] = '\0';
        sum += atoll(buf);
      } else if (n == 0) {
        // writer(s) closed in2
        open2 = false;
        close(f2);
      } else if (errno != EINTR) {
        perror("read in2");
        break;
      }
    }
  }

  printf("%lld\n", sum);
  return EXIT_SUCCESS;
}
