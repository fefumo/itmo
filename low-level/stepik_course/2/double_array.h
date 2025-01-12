#ifndef DOUBLE_ARRAY_H
#define DOUBLE_ARRAY_H

#include "array.h"

/*  ---- maybe int[] ---- */

struct maybe_array_int {
  struct array_int value;
  bool valid;
};

extern const struct maybe_array_int none_array_int;
struct maybe_array_int some_array_int(struct array_int);

/*  ---- int[][] ---- */

struct array_array_int {
  struct array_int* data;
  size_t size;
};

struct maybe_array_int array_array_int_get_row( struct array_array_int, size_t );
bool array_array_int_set_row( struct array_array_int a, size_t i, struct array_int value );
struct maybe_int64 array_array_int_get( struct array_array_int a, size_t i, size_t j );
bool array_array_int_set( struct array_array_int a, size_t i, size_t j, int64_t value );
struct array_array_int array_array_int_read();
void array_array_int_print( struct array_array_int array);\
struct maybe_int64 array_array_int_min( struct array_array_int array );
void array_array_int_normalize( struct array_array_int array, int64_t m);
void array_array_int_free( struct array_array_int array );
#endif