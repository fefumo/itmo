#include <initial.h>
#include <stdbool.h>
#include <stddef.h>

/* Вам доступны:


struct maybe_int64 {
    int64_t value; 
    bool valid; 
};

struct maybe_int64 some_int64(int64_t i);

extern const struct maybe_int64 none_int64;

void maybe_int64_print( struct maybe_int64 i );
struct maybe_int64 maybe_read_int64();
void print_int64(int64_t i)
*/

void interpret_push(struct vm_state* state) {
  stack_push(& state->data_stack, state->ip->as_arg64.arg);
}

void interpret_iread(struct vm_state* state) {
    struct maybe_int64 value = maybe_read_int64();
    if (value.valid) {
        stack_push(&state->data_stack, value.value);
    } else {
        err("Failed to read integer");
        state->ip = NULL; 
    }
}

void interpret_iadd(struct vm_state* state ) {
    struct maybe_int64 first = stack_pop(&state->data_stack);
    struct maybe_int64 second = stack_pop(&state->data_stack);
    if (first.valid && second.valid) {
        stack_push(&state->data_stack, first.value + second.value);
    } else {
        err("Stack underflow during addition");
        state->ip = NULL;
    }
}

void interpret_iprint(struct vm_state* state) {
    struct maybe_int64 value = stack_pop(&state->data_stack);
    if (value.valid) {
        print_int64(value.value);
    } else {
        err("Stack underflow during print");
        state->ip = NULL;
    }
}

/* Подсказка: можно выполнять программу пока ip != NULL,
    тогда чтобы её остановить достаточно обнулить ip */
void interpret_stop(struct vm_state* state ) {
    state->ip = NULL;
}

void (*interpreters[])(struct vm_state*) = {
    [BC_PUSH] = interpret_push,
    [BC_IREAD] = interpret_iread,
    [BC_IADD] = interpret_iadd,
    [BC_IPRINT] = interpret_iprint,
    [BC_STOP] = interpret_stop
};


void interpret(struct vm_state* state) {

    size_t interpreters_count = sizeof(interpreters) / sizeof(interpreters[0]);

    while (state->ip != NULL) {
        if (state->ip->opcode < 0 || (size_t)state->ip->opcode >= interpreters_count) {
            err("Invalid opcode");
            return;
        }
        interpreters[state->ip->opcode](state);  
        if (state->ip != NULL) {
            state->ip++; 
        }
    }
}