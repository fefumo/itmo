#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

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

  char buf[64];
  int len = snprintf(buf, sizeof(buf), "%ld\n", (long)getpid());
  if (len > 0)
    write(STDOUT_FILENO, buf, (size_t)len);
  close(STDOUT_FILENO);

  for (;;) {
  }

  return 0;
}
