#include "vector.h"

int main(){
    struct vector* vector = create_vector(51);
    for(int64_t i = 0; i < get_capacity(vector); i++){
        push_back(vector, i);
    }
    print_vector(stdout, vector);
    int64_t arr[] = {51, 52, 53, 54, 55, 56, 57, 58, 58, 60};
    add_array(vector, arr, 10);
    printf("after adding 10 elements\n");
    print_vector(stdout, vector);

    /* writing to a file */
    FILE* out = fopen("output.txt", "w");
    print_vector(out, vector);

    destroy_vector(vector);

    return 0;
}