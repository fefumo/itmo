#ifndef L_LIST_H
#define L_LIST_H

struct list {
    struct list* next;
    int64_t value;
};

struct list* node_create( int64_t value );
void list_add_front( struct list** old, int64_t value);
size_t list_length( const struct list* list);
void list_destroy( struct list* list );
struct list* list_last( struct list * list );
void list_add_back( struct list** old, int64_t value );

#endif