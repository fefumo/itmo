#include <arpa/inet.h>
#include <errno.h>
#include <netinet/in.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <unistd.h>

#define MAX_MSG 5120

static int comp(const void *a, const void *b) {
  const char f = *(const char *)a;
  const char s = *(const char *)b;
  if (f < s)
    return 1;
  if (f > s)
    return -1;
  return 0;
}

static ssize_t read_cstring(int fd, char *buf, size_t cap) {
  size_t pos = 0;
  while (1) {
    if (pos >= cap) {
      errno = EMSGSIZE;
      return -1;
    }
    ssize_t n = read(fd, buf + pos, 1);
    if (n == 0) {
      return (pos == 0) ? 0 : -1;
    }
    if (n < 0) {
      if (errno == EINTR)
        continue;
      return -1;
    }
    if (buf[pos] == '\0') {
      return (ssize_t)(pos + 1);
    }
    pos += 1;
  }
}

static int write_all(int fd, const void *buf, size_t len) {
  const char *p = (const char *)buf;
  size_t left = len;
  while (left > 0) {
    ssize_t n = write(fd, p, left);
    if (n < 0) {
      if (errno == EINTR)
        continue;
      return -1;
    }
    p += n;
    left -= (size_t)n;
  }
  return 0;
}

int main(int argc, char **argv) {
  if (argc < 2) {
    return 1;
  }
  int port = atoi(argv[1]);
  if (port <= 0 || port > 65535) {
    fprintf(stderr, "invalid port\n");
    return 1;
  }

  int srv = socket(AF_INET, SOCK_STREAM, 0);
  if (srv < 0) {
    perror("socket");
    return 1;
  }

  int one = 1;
  setsockopt(srv, SOL_SOCKET, SO_REUSEADDR, &one, sizeof(one));

  struct sockaddr_in addr;
  memset(&addr, 0, sizeof(addr));
  addr.sin_family = AF_INET;
  addr.sin_port = htons((uint16_t)port);
  inet_aton("127.0.0.1", &addr.sin_addr);

  if (bind(srv, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
    perror("bind");
    close(srv);
    return 1;
  }
  if (listen(srv, 16) < 0) {
    perror("listen");
    close(srv);
    return 1;
  }

  char buf[MAX_MSG + 1]; // +1 '\0'
  for (;;) {
    int cli = accept(srv, NULL, NULL);
    if (cli < 0) {
      if (errno == EINTR)
        continue;
      perror("accept");
      break;
    }

    while (1) {
      ssize_t m = read_cstring(cli, buf, sizeof(buf));
      if (m <= 0) {
        break;
      }

      if (strcmp(buf, "OFF") == 0) {
        close(cli);
        close(srv);
        return 0;
      }

      size_t len = (size_t)m - 1;
      qsort(buf, len, 1, comp);

      if (write_all(cli, buf, len + 1) < 0) {
        break;
      }
    }

    close(cli);
  }

  close(srv);
  return 0;
}
