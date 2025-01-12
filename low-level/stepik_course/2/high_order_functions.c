#include <stdint.h>
#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>
#include "l_list.h"

/*
struct list {
    int64_t value;
    struct list* next;
};
*/

void print_int64(int64_t i){
    printf("%" PRId64 " ", i);
}

/* Запустить функцию f на каждом элементе списка  */
void list_foreach(const struct list* l, void (f)(int64_t)) {
    while (l){
        f(l->value);
        l = l->next;
    }
}

/* Вывести список с помощью foreach и дополнительной функции */
/*void list_print( const struct list* l) {
    if(l) list_foreach(l, print_int64_space);
}*/


/* Изменить каждый элемент списка с помощью функции f  */
void list_map_mut(struct list* l, int64_t (f) (int64_t))  {
    while (l){
        l->value = f(l->value);
        l = l->next;
    }
}


static int64_t triple( int64_t x ) { return x * 3; }

/* Используя list_map_mut умножьте все элементы списка на 3 */
void list_triple(struct list* l ) { 
    list_map_mut(l, triple);
}

/* Вы можете пользоваться следующими функциями */
void print_int64(int64_t i);
struct list* node_create( int64_t value );



/*  Создать новый список, в котором каждый элемент получен из соответствующего
    элемента списка l путём применения функции f */
struct list* list_map(const struct list* l, int64_t (f)(int64_t)) {
    if (l == NULL) {
        return NULL; // Если исходный список пуст, возвращаем NULL
    }

    // Создаём новый узел для первого элемента
    struct list* new_head = node_create(f(l->value));
    struct list* current_new = new_head; // Указатель для текущего нового узла
    struct list* current_old = l->next; // Указатель для текущего старого узла

    // Проходим по всем элементам старого списка
    while (current_old != NULL) {
        // Создаём новый узел с применённой функцией
        current_new->next = node_create(f(current_old->value));
        current_new = current_new->next; // Переходим к следующему новому узлу
        current_old = current_old->next;   // Переходим к следующему старому узлу
    }

    current_new->next = NULL; // Завершаем новый список
    return new_head; // Возвращаем голову нового списка
}

int64_t identity(int64_t value) {
    return value;
}

// Функция для копирования списка
struct list* list_copy(const struct list* l) {
    return list_map(l, identity); // Применяем функцию identity для копирования
}

// Функция, возвращающая абсолютное значение
int64_t absolute(int64_t value) {
    return value < 0 ? -value : value;
}

// Функция для получения списка абсолютных значений
struct list* list_abs(const struct list* l) {
    return list_map(l, absolute); // Применяем функцию absolute для получения абсолютных значений
}

static int64_t sum( int64_t x, int64_t y) { return x + y; }

typedef int64_t folding(int64_t, int64_t);

/* Свернуть список l с помощью функции f. */
int64_t list_fold( 
        const struct list* l, 
        int64_t init, 
        folding f) {
    
    int64_t result = init;
    
    while (l){
        result = f(l->value, result);
        l = l->next;
    }
    return result;
}

/* Просуммируйте список с помощью list_fold и sum */
int64_t list_sum( const struct list* l ) {
    return list_fold( l, 0, sum);
}

/*  Сгенерировать список длины sz с помощью значения init и функции f
 Результат: init, f(init), f(f(init)), ... */
struct list* list_iterate( int64_t init, size_t sz, int64_t(f)(int64_t)) {
    if (sz == 0) { return NULL; }
    struct list* new_list = node_create(init);
    struct list* temp = new_list;
    int64_t value = init;
    for ( size_t i = 1; i < sz; i++){
        value = f(value);
        temp->next = node_create(value);
        temp = temp -> next;
    }
    
    return new_list;
}