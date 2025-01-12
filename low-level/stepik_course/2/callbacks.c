#include "callbacks.h"

/*
callback_list related
*/
struct callback_list* node_create(move_callback cb){
    struct callback_list* node = malloc(sizeof(struct callback_list));
    node->callback = cb;
    node->next = NULL;
    return node;
}

void add_front(struct callback_list** old, move_callback cb){
    struct callback_list* new = node_create(cb);
    new->next = *old;
    *old = new;
}

void list_free(struct callback_list* list){
    while (list){
        struct callback_list* to_free = list;
        list = list->next;
        free(to_free);
    }
}


// Добавить callback к роботу, чтобы он вызывался при движении
// В callback будет передаваться направление движения
void register_callback(struct robot* robot, move_callback new_cb) {
    add_front(&robot->list, new_cb);
}

// Отменить все подписки на события.
// Это нужно чтобы освободить зарезервированные ресурсы
// например, выделенную в куче память
void unregister_all_callbacks(struct robot* robot) {
    list_free(robot->list); // deallocate
    robot->list->callback = NULL;
}



// Вызывается когда робот движется
// Эта функция должна вызвать все обработчики событий
void move(struct robot* robot, enum move_dir dir) {
    struct callback_list* current = robot->list;
    while (current){
        current->callback(dir);
        current=current->next;
    }
}

/*
пример с хендлером

void movement_handler(enum move_dir dir){
    switch(dir){
        case MD_DOWN: 
            printf("robot moves down\n");
            break;
        case MD_LEFT:
            printf("robot moves left\n");
            break;
        case MD_RIGHT:
            printf("robot moves right\n");
            break;
        case MD_UP: 
            printf("robot moves up\n");
            break;
        case MD_NONE: 
            printf("robot is doing nothing...\n");
            break;
        default: 
            printf(" default case. no movement?");
            break;
    }
}


int main() {
    struct robot my_robot = {"Michael", NULL};
    register_callback(&my_robot, movement_handler);

    move(&my_robot, MD_UP);
    move(&my_robot, MD_DOWN);
    move(&my_robot, MD_LEFT);

    unregister_all_callbacks(&my_robot);
    return 0;
}




*/