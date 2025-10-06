#include <arpa/inet.h>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <unistd.h>

static volatile sig_atomic_t running = 1;
static void on_sigint(int _) {
  (void)_;
  running = 0;
}

int main(int argc, char **argv) {
  signal(SIGINT, on_sigint);

  int fd = socket(AF_INET, SOCK_DGRAM, 0);
  if (fd < 0) {
    perror("socket");
    return 1;
  }

  struct sockaddr_in addr;
  memset(&addr, 0, sizeof(addr));
  addr.sin_family = AF_INET;
  inet_aton("127.0.0.1", &addr.sin_addr);
  addr.sin_port = htons(atoi(argv[1]));

  char ip[INET_ADDRSTRLEN];
  inet_ntop(AF_INET, &addr.sin_addr, ip, sizeof(ip));
  // printf("listening on %s:%u\n", ip, ntohs(addr.sin_port));

  if (bind(fd, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
    perror("bind");
    close(fd);
    return 1;
  }

  char buf[BUFSIZ];
  while (running) {
    struct sockaddr_in peer;
    socklen_t peerc = sizeof(peer);
    ssize_t n =
        recvfrom(fd, buf, sizeof(buf), 0, (struct sockaddr *)&peer, &peerc);

    if (n < 0) {
      perror("recvfrom");
      break;
    }
    char pip[INET_ADDRSTRLEN];
    inet_ntop(AF_INET, &peer.sin_addr, pip, sizeof(pip));
    // printf("from %s:%u  %zd bytes\n", pip, ntohs(peer.sin_port), n);

    buf[n] = '\0';
    if (strcmp(buf, "OFF\n") == 0)
      break;
    else
      printf("%s\n", buf);
  }

  close(fd);
  return 0;
}
