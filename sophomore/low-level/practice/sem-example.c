/* pipe-example-1.c */

#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/mman.h>
#include <sys/wait.h>
#include <semaphore.h>

void* create_shared_memory(size_t size) {
  return mmap(NULL,
              size,
              PROT_READ | PROT_WRITE,
              MAP_SHARED | MAP_ANONYMOUS,
              -1, 0);
}

#define MAX_MESSAGE_DATA_LEN 128

struct shared_data
{
  sem_t sem_update, sem_string, sem_ready, sem_end;
  char str[MAX_MESSAGE_DATA_LEN];
};

int main() {
  struct shared_data *ctx = create_shared_memory(sizeof(struct shared_data));
  sem_init(&ctx->sem_update, 1, 0);
  sem_init(&ctx->sem_string, 1, 0);
  sem_init(&ctx->sem_ready, 1, 1);
  sem_init(&ctx->sem_end, 1, 0);
  
  // Создадим дочерний процесс
  pid_t pid = fork();
  if (pid == 0) {
    // Будем читать строки и отправлять их сообщениями
    for (;;)
    {
      sem_wait(&ctx->sem_ready);
      printf("Input string: ");
      // Прочитаем строку
      if (fgets(ctx->str, MAX_MESSAGE_DATA_LEN, stdin) == NULL)
        return 0;
      if (strlen(ctx->str) <= 1)
        break;

      sem_post(&ctx->sem_string);
      sem_post(&ctx->sem_update);
    }
    
    // Отправим сообщение о завершении ввода
    sem_post(&ctx->sem_end);
    sem_post(&ctx->sem_update);
    
    return 0;
  }
  
  // Будем ждать, пока ребенок не пришлет сообщение
  while (1)
  {
    sem_wait(&ctx->sem_update);

    if (sem_trywait(&ctx->sem_end) == 0)
    {
      printf("Recieved END from child.\n");
      break;
    }

    if (sem_trywait(&ctx->sem_string) == 0)
      printf("Recieved string from child: %s\n", ctx->str);

    sem_post(&ctx->sem_ready);
  }
  
  // Дождемся завершения ребенка
  waitpid(pid, NULL, 0);

  return 0;
}
