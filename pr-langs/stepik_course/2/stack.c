#include "double_array.h"
#include "array.h"
#include "stack.h"

void print_int64(int64_t val){
    printf("%" PRId64, val);
}

struct array_int array_int_create( size_t sz ) {
    return (struct array_int) { .data = malloc( sizeof( int64_t ) * sz ), .size = sz };
}

// Количество элементов в стеке
size_t stack_count( const struct stack* s ){
    return s->count;
}

// Создаем и деинициализируем стек
struct stack stack_create( size_t size ){
    struct stack st;
    st.count = 0;
    st.data = array_int_create(size);
    return st;
}
void stack_destroy( struct stack* s ){
    array_int_free(s->data);
}

// Стек полный
bool stack_is_full( const struct stack * s){
    if (s->count == s->data.size){
        return true;
    }
    else {return false;}
}
// Стек пустой
bool stack_is_empty( const struct stack * s){
    return s->count == 0 ? true : false;
}

// Поместить значение в стек
bool stack_push( struct stack* s, int64_t value ){
    return array_int_set( s->data, s->data.size, value);
}

// Вынуть значение с вершины стека. Может вернуть none_int64
struct maybe_int64 stack_pop( struct stack* s ){
    struct maybe_int64 a = some_int64((int64_t) &s->data.data);
    return a;
}

void stack_print( const struct stack* s ) {
  for (size_t i = 0; i < stack_count( s ); i = i + 1 ) {
    print_int64( array_int_get( s->data, i).value );
    printf(" ");
  }
}