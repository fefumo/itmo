#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void sig_handle(int errno) {
  if (errno == SIGURG) {
    char buf[64];
    int len = snprintf(buf, sizeof(buf), "%ld\n", (long)getpid());
    if (len > 0)
      write(STDOUT_FILENO, buf, (size_t)len);
    close(STDOUT_FILENO);
    exit(0);
  }
}

int main(void) {
  pid_t pid = fork();
  if (pid < 0)
    exit(EXIT_FAILURE);
  if (pid > 0)
    exit(EXIT_SUCCESS);

  chdir("/");
  if (setsid() < 0)
    exit(EXIT_FAILURE);

  close(STDIN_FILENO);

  for (;;) {
    if (signal(SIGURG, sig_handle) == SIG_ERR) {
      perror("sigurg");
      exit(EXIT_FAILURE);
    }
  }

  return 0;
}
