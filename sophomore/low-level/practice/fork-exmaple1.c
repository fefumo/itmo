/* fork-example-1.c */

#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>
#include <semaphore.h>

void* create_shared_memory(size_t size) {
  return mmap(NULL,
              size,
              PROT_READ | PROT_WRITE,
              MAP_SHARED | MAP_ANONYMOUS,
              -1, 0);
}

struct data{
    int arr[10];
    sem_t sem_update, sem_string, sem_ready, sem_end;

};

int main() {
  struct data* shmem = (struct data*) create_shared_memory(sizeof(struct data));
  sem_init(&shmem->sem_update, 1, 0);
  sem_init(&shmem->sem_ready, 1, 1);
  sem_init(&shmem->sem_end, 1, 0);


  printf("Shared memory at: %p\n" , shmem);

  for (size_t i = 0; i<10;i++){
    shmem->arr[i] = i;
  }


  int pid = fork();

  if (pid == 0) {
    for(;;){
    sem_wait(&shmem->sem_ready);
    int a;
    int b;
    scanf("%d %d", &a, &b);
    if (a >= 0 && a <10)
      shmem->arr[a] = b;
    else
      break;
    
    sem_post(&shmem->sem_update);
    }
    
    sem_post(&shmem->sem_end);
    sem_post(&shmem->sem_update);

    exit(0);
  } else {
    printf("Child's pid is: %d\n", pid);
    for(;;){
      sem_wait(&shmem->sem_update);
      if (sem_trywait(&shmem->sem_end) == 0){
        break;
      }

      for (size_t i =0; i < 10; i++){
        printf("%d, \n", shmem->arr[i]);
      }
      sem_post(&shmem->sem_ready);

    }
    wait(NULL);

  }
  return 0;
}
