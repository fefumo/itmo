#ifndef SORTING_H
#define SORTING_H

#include <stdint.h>
#include <stddef.h>
#include <stdlib.h>
#include <string.h>

/*  Тип для идентификаторов пользователей
    и его спецификаторы ввода и вывода для printf */
typedef struct { char* addr; } string_heap ;

typedef uint64_t uid;
#define PRI_uid PRIu64
#define SCN_uid SCNu64

enum city {C_SARATOV, C_MOSCOW, C_PARIS, C_LOS_ANGELES, C_OTHER};

extern char* city_string[];

struct user {
  const uid id;
  const string_heap name;
  enum city city;
};

int uint64_comparer( const uint64_t* x, const uint64_t* y );
int uint64_void_comparer(const void* _x, const void* _y );
void users_sort_uid(struct user users[], size_t sz);
void users_sort_name(struct user users[], size_t sz);
void users_sort_city(struct user users[], size_t sz);


#endif