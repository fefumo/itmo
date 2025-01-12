#ifndef ARRAY_H
#define ARRAY_H

#include <inttypes.h>
#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>

struct maybe_int64 {
  int64_t value;
  bool valid;
};

struct array_int {
    int64_t* data;
    size_t size;
};

extern const struct maybe_int64 none_int64;

struct maybe_int64 some_int64(int64_t);
int64_t read_int64();
size_t read_size();
void array_int_fill(int64_t*, size_t);
struct array_int array_int_read();
struct maybe_int64 array_int_get(struct array_int, size_t);
bool array_int_set(struct array_int, size_t, int64_t);
void array_int_print(struct array_int);
struct maybe_int64 array_int_min( struct array_int);
void array_int_free( struct array_int);

#endif