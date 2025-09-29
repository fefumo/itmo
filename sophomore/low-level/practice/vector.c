#include <vector.h>

struct vector{
    int64_t *array;
    size_t capacity; //how much memory is allocated
    size_t used; //how much is used
};

size_t get_capacity(struct vector* vec){ return vec->capacity; }
size_t get_used_amount(struct vector* vec){ return vec->used; }
int64_t* get_array(struct vector* vec){ return vec->array; }

int64_t* get_element(const struct vector *vec, size_t index)
{
    if (index > vec->used){
        NULL;
    }
    return vec->array + index;
}

struct vector *create_vector(size_t capacity)
{
    struct vector* vector = malloc(sizeof(struct vector));
    if(!vector){
        fprintf(stderr, "Failed to allocate vector\n");
        return NULL;
    }

    vector->array = malloc(sizeof(int64_t) * capacity);
    if(!vector->array){
        fprintf(stderr, "Failed to allocate array\n");
        free(vector);
        return NULL;
    }
    vector->capacity = capacity;
    vector->used = 0;
    return vector;
}

void destroy_vector(struct vector *vec)
{
    if (!vec)
        return;
    if (vec->array)
        free(vec->array);
    free(vec);
}

void shrink_vector(struct vector *vec, size_t new_capacity)
{
    printf("shrinking vector...");
    if (new_capacity == 0)
        return;

    if(get_used_amount(vec) <= new_capacity){
        fprintf(stderr, "Cannot shrink vector below used size (%zu)\n", get_used_amount(vec));
        return;
    }

    int64_t* temp = realloc(vec->array, sizeof(int64_t) * new_capacity);
    if (temp == NULL){
        fprintf(stderr, "failed to reallocate memory for changing array size\n");
        return;
    }
    vec->array = temp;
    vec->capacity = new_capacity;

    if(vec->used > new_capacity){
        vec->used = new_capacity;
    }
}

void change_size(struct vector *vec, size_t new_capacity)
{
    printf("before changing: vector size = %zu, vector number of elements = %zu\n ", get_capacity(vec), vec->used);
    if (get_capacity(vec) > new_capacity){
        shrink_vector(vec, new_capacity);
        return;
    }
    if (get_capacity(vec) == new_capacity){
        printf("capacity is equal to new capacity. returning...\n");
        return;
    }
    int64_t* temp = realloc(get_array(vec), sizeof(int64_t) * new_capacity);
    if (temp == NULL){
        fprintf(stderr, "failed to reallocate memory for changing array size\n");
        return;
    }
    else{
        vec->array = temp;
        vec->capacity = new_capacity;
    }
    printf("first array element after chaning size: %" PRId64 "\n", vec->array[0]);
    printf("size changed to %zu\n", new_capacity);
    printf("actual vector size = %zu, vector number of elements = %zu\n", get_capacity(vec), vec->used);
}

void push_back(struct vector *vec, int64_t value)
{
    if  (vec->array == NULL){
        fprintf(stderr, "Vector array is not allocated\n");
        return;
    }

    if (get_used_amount(vec) == get_capacity(vec)){
        change_size(vec, vec->capacity * 2);
    }

    if(get_used_amount(vec) < get_capacity(vec)){
        vec->array[vec->used] = value;
        vec->used++;
    }
}

void add_array(struct vector* vec,  int64_t* arr_ptr, size_t length)
{
    printf("adding array...\n");

    if (vec){
        if (get_used_amount(vec) + length > get_capacity(vec)) {
            printf("trying to change prev size %zu to %zu\n", vec->capacity, vec->used + length );
            change_size(vec, vec->used + length);
        }
        if (get_used_amount(vec) < get_capacity(vec)){
            for(size_t i = 0; i < length; i++){
                //printf("arrptr[i] = %" PRId64 "\n", arr_ptr[i]);
                push_back(vec, arr_ptr[i]); // make faster push_back
            }
        }
    }

}

/* вот такой вариант подсказал chatGPT */
void add_array2(struct vector* vec,  int64_t* arr_ptr, size_t length)
{
    // Увеличиваем ёмкость вектора, если не хватает места
    if (vec->capacity < vec->used + length) {
        change_size(vec, vec->used + length);
    }

    // Копируем данные из массива
    memcpy(&vec->array[vec->used], arr_ptr, length * sizeof(int64_t));

    // Обновляем счётчик использованных элементов
    vec->used += length;
}

void print_vector(FILE* output_file, const struct vector* vec) {
    if (!vec){
        fprintf(stderr, "Vector is null");
        return;
    }
    for (size_t i = 0; i < vec->used; i++) {
        fprintf(output_file, "%" PRId64 " ", vec->array[i]);
    }
    fprintf(output_file, "\n");
}
