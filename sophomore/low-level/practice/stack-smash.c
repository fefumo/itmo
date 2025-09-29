/* stack-smash.c */

#include <stdio.h>
#include <stdlib.h>

struct user {
  const char *name, *password;
} const users[] = {{"Cat", "Meowmeow"}, {"Skeletor", "Nyarr"}};

void print_users() {
  printf("Users:\n");
  for (size_t i = 0; i < sizeof(users) / sizeof(struct user); i++) {
    printf("%s: %s\n", users[i].name, users[i].password);
  }
}

void fill(FILE *f, char *where, size_t len) {
  fread(where, 1, len, f);
}

void vulnerable(FILE *f) {
  char buffer[8];
  fill(f, buffer, 8);
}

int main(int argc, char **argv) {
  vulnerable(stdin);

  puts("nothing happened");
  return 0;
}
