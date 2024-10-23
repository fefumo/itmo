#include <inttypes.h>
#include <stdlib.h>
#include "l_list.h"
#include <stdio.h>
#include <stdbool.h>

struct list* node_create( int64_t value ) {
    struct list *l = malloc( sizeof(struct list) );
    l->value = value;
    l->next = NULL;
    return l;
}

void list_add_front( struct list** old, int64_t value){
	struct list* new = node_create(value);
	new->next = *old;
	*old = new;
}

size_t list_length( const struct list* list) {
	size_t res = 0;
	while (list){
		list = list->next;
		res++;
	}
	return res;
}

void list_destroy( struct list* list ) {
	struct list* temp = list;
	while (temp){
		list=list->next;	
		free(temp);
		temp = list;
	}
	printf("\nlist cleared\n");
}

struct list* list_last( struct list * list ) {
    if (!list){
        return NULL;
    }
    struct list* res = list;
    while (res->next){
        res = res->next;
    }
    return res;
}

void list_add_back( struct list** old, int64_t value ) {
    if (*old == NULL){
        list_add_front(old, value); // if !(*old => add_back == add_front
        return;
    }
    struct list* last = list_last(*old);
    struct list* newnode = node_create(value);
    last->next=newnode;
}

int64_t list_sum( const struct list* list ) {
    size_t size = list_length(list);
    int64_t sum = 0;
    const struct list* temp = list;
    for (size_t i = 0; i < size; i++){
        sum += temp->value;
        temp=temp->next;
    }
    return sum;
}

struct maybe_int64 {
  bool valid;
  int64_t value;
};

struct maybe_int64 some_int64( int64_t i ) {
  return (struct maybe_int64) { .value = i, .valid = true };
}

const struct maybe_int64 none_int64 = { 0 };

struct maybe_int64 maybe_read_int64() {
    int64_t num;
    int scanres = scanf("%" SCNd64, &num);
    if (scanres == 0 || scanres == EOF){ return none_int64; }
    else{
        return some_int64(num);
    }
}

struct list* list_read() {
    struct maybe_int64 n = maybe_read_int64();
    struct list* newlist;

    if (!n.valid) { return NULL; }
    else {
         newlist = node_create(n.value);
    }
    
    struct list* temp = {0};
    n = maybe_read_int64();
    if (!n.valid) { return newlist; }
    else {
        struct list* temp = node_create(n.value);
    }
    
    newlist->next = temp;
    
    n = maybe_read_int64();
    while(n.valid){
        struct list* newnode = node_create(n.value);
        
        temp->next = newnode;
        n = maybe_read_int64();
        temp->next=temp;
    }
    return newlist;
}


/*
остальное решал прямо на сайтике.
*/