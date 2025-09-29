/* fork-example.c */

#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <signal.h>

int main() {
  int fd[2];
  pipe(fd);

  pid_t outer_pid = fork();
  if (outer_pid == 0)
  {
    close(fd[0]);
    pid_t pid = fork();
    if (pid == 0) {
      dup2(fd[1], 1);
      close(fd[1]);
      execl("./hello", "hello", NULL);
      printf("This should not be printed.\n");
      exit(-1);
    }
    close(fd[1]);
  
    pid_t waiter_pid = fork();
    if (waiter_pid == 0)
    {
      sleep(1);
      exit(0);
    }
  
    pid_t done_pid = wait(NULL);
    if (done_pid == pid)
    {
      printf("All Ok.\nKilling wait process.\n");
      kill(waiter_pid, SIGKILL);
      waitpid(waiter_pid, NULL, 0);
    }
    else // if (done_pid == waiter_pid)
    {
      printf("All bad.\nKilling child process.\n");
      kill(pid, SIGKILL);
      waitpid(pid, NULL, 0);
    }

    exit(0);
  }
  
  close(fd[1]);
  printf("Waiting for child...\n");
  fflush(stdout);
  waitpid(outer_pid, NULL, 0);
  printf("Done.\n");
  char c;
  while (read(fd[0], &c, 1) == 1)
  {
    printf("%c ", c);
  }
  close(fd[0]);

  return 0;
}
