#ifndef CALLBACKS_H
#define CALLBACKS_H

#include <stdint.h>
#include <stddef.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

enum move_dir { MD_UP, MD_RIGHT, MD_DOWN, MD_LEFT, MD_NONE };

// Определите тип обработчика событий move_callback с помощью typedef
typedef void (*move_callback) (enum move_dir);

// Робот и его callback'и
// callback'ов может быть неограниченное количество
struct callback_list {
    move_callback callback;
    struct callback_list* next;
};

struct robot {
    const char* name;
    struct callback_list* list;
};



void register_callback(struct robot* robot, move_callback new_cb);
void unregister_all_callbacks(struct robot* robot);
void move(struct robot* robot, enum move_dir dir);
struct callback_list* node_create(move_callback cb);
void add_front(struct callback_list** old, move_callback cb);
void list_free(struct callback_list* list);

#endif