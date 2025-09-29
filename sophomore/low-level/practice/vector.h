#ifndef VECTOR_H
#define VECTOR_H

#include <inttypes.h>
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct vector;

/* create-destroy */
extern struct vector* create_vector(size_t capacity);
extern void destroy_vector(struct vector* vec);

/* getters */
extern size_t get_used_amount(struct vector* vec);
extern size_t get_capacity(struct vector* vec);
extern int64_t* get_array(struct vector* vec);

/* elements */
extern int64_t* get_element(const struct vector* vec, size_t index);

/* changing vector */
extern void push_back(struct vector* vec, int64_t value);
extern void change_size(struct vector* vec, size_t new_capacity);
extern void shrink_vector(struct vector* vec, size_t new_capacity);
extern void add_array(struct vector* vec,  int64_t* arr_ptr, size_t length);
extern void add_array2(struct vector* vec,  int64_t* arr_ptr, size_t length);

/* printing */
extern void print_vector(FILE* output_file, const struct vector* vector);

#endif