#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main() {
  int pid = getpid();
  char commandBuffer[100];

  sprintf(commandBuffer, "cat /proc/%i/status | grep PPid | cut -d '	' -f 2",
          pid);
  system(commandBuffer);

  return 0;
}
