#include "array.h"

const struct maybe_int64 none_int64 = { 0 };

struct maybe_int64 some_int64(int64_t i) {
  return (struct maybe_int64) { i, true };
}

int64_t read_int64(){
    int64_t num;
    scanf("%" SCNd64, &num);
    return num;
}


size_t read_size() { size_t sz = 0; scanf("%zu", &sz); return sz; }

void array_int_fill( int64_t* array, size_t sz ) {
  for( size_t i = 0; i < sz; i = i + 1 ) {
    array[i] = read_int64();
  }
}

struct array_int array_int_read() {
  const size_t size = read_size();
  if (size > 0) {
    int64_t* array = malloc( sizeof(int64_t) * size);
    array_int_fill( array, size );
    return (struct array_int) { .data = array, .size = size };
  }
  else return (struct array_int) {0};
}

// возвращает ошибку если индекс за пределами массива
struct maybe_int64 array_int_get( struct array_int a, size_t i ) {
    if (i >= a.size){
        return none_int64;
    }
    return some_int64(*(a.data + i));
}

// возвращает false если индекс за пределами массива
bool array_int_set( struct array_int a, size_t i, int64_t value ) {
    if (array_int_get(a, i).valid == false){
        return false;
    }
    *(a.data + i) = value;
    return true;
}

void array_int_print( struct array_int array ) {
  for (size_t i = 0; i < array.size; i = i + 1) {
    printf("%" PRId64 " " , array.data[i]);
  }
}

struct maybe_int64 array_int_min( struct array_int array ) {
    if (array.data == NULL) { return none_int64; } 
    struct maybe_int64 min = some_int64(*array.data);
    for (size_t i = 1; i < array.size; i++){
        if (array.data[i] < min.value){
            min.value = array.data[i];
        }
    }
    return min;
}

void array_int_free( struct array_int a ) {
    //printf("Freeing memory: data=%p, size=%zu\n", a.data, a.size);
    if ( a.size > 0 ) {
        free(a.data); 
        a.size = 0;
    } 
}