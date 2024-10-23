#include "sorting.h"


/*
void qsort(
   void *base, 
   size_t nitems, 
   size_t size, 
   int (*compar)(const void *, const void*)
);
*/

char* city_string[] = {
  [C_SARATOV] = "Saratov",
  [C_MOSCOW] = "Moscow",
  [C_PARIS] = "Paris",
  [C_LOS_ANGELES] = "Los Angeles",
  [C_OTHER] = "Other"
};

int uint64_comparer( const uint64_t* x, const uint64_t* y ) {
  if (*x > *y) return 1;
  if (*x < *y) return -1;
  return 0;
}

int uint64_void_adapter(const void* _x, const void* _y ) {
    struct user* x = (struct user*) _x;
    struct user* y = (struct user*) _y;
    return uint64_comparer(&x->id, &y->id);
  // в этой строчке мы используем const void* вместо const int*
  // это правильное неявное преобразование типов
}

int char_comparer(const char* x, const char* y){
    return strcmp(x, y);
}
int char_void_name_adapter(const void* _x, const void* _y){
    struct user* x = (struct user*) _x;
    struct user* y = (struct user*) _y;
    return char_comparer(x->name.addr, y->name.addr);
}
/* Сортировать массив пользователей по полю uid по возрастанию */
void users_sort_uid(struct user users[], size_t sz) {
    qsort(users, sz, sizeof(struct user),  uint64_void_adapter);
}

/* Сортировать массив пользователей по полю name */
/* Порядок строк лексикографический; можно использовать компаратор 
   строк -- стандартную функцию strcmp */
void users_sort_name(struct user users[], size_t sz) {
    qsort(users, sz, sizeof(struct user), char_void_name_adapter);
}

int char_void_city_adapter(const void * _x , const void * _y){
    struct user* x = (struct user*) _x ;
    struct user* y = (struct user*) _y ;
    return char_comparer(city_string[x->city], city_string[y->city]);
}

/* Сортировать массив по _текстовому представлению_ города */
void users_sort_city(struct user users[], size_t sz) {
    qsort(users, sz, sizeof(struct user), char_void_city_adapter);
}

/*

мейн для проверки

void print_users(struct user users[], size_t n) {
    for (size_t i = 0; i < n; i ++) {
        printf("user #%zu ", i);
        printf("id: %" PRId64 " ", users[i].id);
        printf("name: %s ",  users[i].name.addr);
        printf("city: %s\n", city_string[users[i].city]);
    }
}

int main() {
    struct user user1 = {1, "Pasha Fedorov", C_SARATOV};
    struct user user2 = {2, "Fedya Pavelenko", C_MOSCOW};
    struct user user3 = {3, "Kesha Francuz", C_LOS_ANGELES};
    struct user user4 = {4, "KEKW", C_OTHER};
    struct user array[] = {user2, user3, user1, user4};
    size_t size = sizeof(array)/sizeof(array[0]);
    
    printf("BEFORE \n");
    print_users(array, size);
    printf("===== names =====\n");
    users_sort_name(array, size);
    print_users(array, size);
    printf("===== city =====\n");
    users_sort_city(array, size);
    print_users(array, size);
    printf("===== id =====\n");
    users_sort_uid(array, size);
    print_users(array, size);
    return 0;
}


*/