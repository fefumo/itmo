#ifndef STACK_H
#define STACK_H

#include "array.h"

struct stack {
  size_t count;
  struct array_int data;
};

void print_int64(int64_t val);
size_t stack_count( const struct stack* s );
struct stack stack_create( size_t size );
void stack_destroy( struct stack* s );
bool stack_is_full( const struct stack * s);
bool stack_is_empty( const struct stack * s);
bool stack_push( struct stack* s, int64_t value );
struct maybe_int64 stack_pop( struct stack* s );
void stack_print( const struct stack* s );

#endif