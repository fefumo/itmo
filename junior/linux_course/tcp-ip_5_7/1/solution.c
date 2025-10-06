#include <arpa/inet.h>
#include <netdb.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])

{
  if (argc != 2)
    return EXIT_FAILURE;

  struct hostent *h;
  h = gethostbyname(argv[1]);

  if (h == NULL) {
    perror("host");
    return EXIT_FAILURE;
  }

  // printf("Name: %s\n", h->h_name);
  // printf("Type = %s len = %d\n", (h->h_addrtype == AF_INET) ? "ipv4" :
  // "ipb6",
  //        h->h_length);

  int i = 0;
  while (h->h_addr_list[i] != NULL) {
    struct in_addr *a = (struct in_addr *)h->h_addr_list[i];
    printf("%s\n", inet_ntoa(*a));
    i++;
  }

  return EXIT_SUCCESS;
}
