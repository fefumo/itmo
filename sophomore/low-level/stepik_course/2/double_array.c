#include "double_array.h"
#include "array.h"

const struct maybe_array_int none_array_int = { {NULL, 0}, false };

void array_int_normalize( struct array_int array, int64_t m ) {
  for (size_t i = 0; i < array.size; i = i + 1) {
    array.data[i] = array.data[i] - m;
  }
}

struct maybe_array_int some_array_int(struct array_int array) {
  return (struct maybe_array_int) { array, true };
}

/*  --- строки ---  */
struct maybe_array_int array_array_int_get_row( struct array_array_int a, size_t i ) {
  if ( 0 <= i && i < a.size ) { return some_array_int( a.data[i] ); }
  else { return none_array_int; }
}

bool array_array_int_set_row( struct array_array_int a, size_t i, struct array_int value ) {
  if (0 <= i && i < a.size) {
    a.data[i] = value;
    return true;
  }
  else { return false; }
}

/*  --- get/set ---  */

struct maybe_int64 array_array_int_get( struct array_array_int a, size_t i, size_t j ) {
  if (i >= 0 && j >= 0){
    if (i < a.size && j < a.data[i].size){
      struct array_int one_array = a.data[i];
      return some_int64(one_array.data[j]);
    }
  }
    return none_int64;
}

bool array_array_int_set( struct array_array_int a, size_t i, size_t j, int64_t value ) {
  if (i >= 0 && j >= 0){
    if (i < a.size && j < a.data[i].size){
      a.data[i].data[j] = value;
      return true;
    }
  }
  return false;
}

/*  --- read/print ---  */

struct array_array_int array_array_int_read() {
    size_t size = read_size();
    if (size > 0){
      struct array_array_int marray;
      marray.data = malloc ( sizeof(struct array_int) * size);
      marray.size = size;
      for (size_t i = 0; i < size; i++){
        struct array_int arr = array_int_read();
        marray.data[i] = arr;
      }
      return marray;
    }
    else return (struct array_array_int){NULL, 0};
}


void array_array_int_print( struct array_array_int array) {
  for (size_t i = 0; i < array.size; i++){
    if (array.data[i].size == 0){
      printf("\n");
      continue;
    }
    array_int_print(array.data[i]);
    printf("\n");
  }
}


/*  --- min/normalize ---  */

// найти минимальный элемент в массиве массивов
struct maybe_int64 array_array_int_min( struct array_array_int array ) {
    struct maybe_int64 num =  array_int_get(*array.data, 0); //точно существущий
    for (size_t i = 0; i < array.size; i ++){
        const struct maybe_array_int cur_row = array_array_int_get_row( array, i );
            if (cur_row.valid){
                int64_t* start = cur_row.value.data;
                for (int64_t* j = start; j < start + cur_row.value.size; j++){
                    if (num.value > *j){
                        num.value = *j;
                    }
                }
            }
    }
    return num;
}

// вычесть из всех элементов массива массивов число m
void array_array_int_normalize( struct array_array_int array, int64_t m) {
  for (size_t i = 0; i < array.size; i = i + 1) {
    const struct maybe_array_int cur_row = array_array_int_get_row( array, i );
    if (cur_row.valid) {
         array_int_normalize( cur_row.value, m );
    }
  }
}

void array_array_int_free( struct array_array_int array ) {
  for (size_t i = 0; i < array.size; i++){
    array_int_free(array.data[i]);
  }
  free(array.data);
}