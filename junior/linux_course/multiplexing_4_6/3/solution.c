#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

static void sig_usr(int);
static int count_1 = 0;
static int count_2 = 0;

int main(void) {
  if (signal(SIGUSR1, sig_usr) == SIG_ERR)
    printf("can't catch SIGUSR1\n");
  if (signal(SIGUSR2, sig_usr) == SIG_ERR)
    printf("can't catch SIGUSR2\n");
  if (signal(SIGTERM, sig_usr) == SIG_ERR)
    printf("wtf cant term?\n");
  for (;;)
    pause();
}

static void sig_usr(int signo) {
  if (signo == SIGUSR1) {
    // printf("received SIGUSR1\n");
    count_1++;
  }
  if (signo == SIGUSR2) {
    // printf("received SIGUSR2\n");
    count_2++;
  }
  if (signo == SIGTERM) {
    // printf("received signal %d\n count: %d\n", signo, count);
    printf("%d %d\n", count_1, count_2);
    exit(0);
  }
}
