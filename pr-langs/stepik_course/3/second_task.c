#include <array.h>
#include <initial.h>
#include <stddef.h>
#include <stdbool.h>
#include "l_list.h"

/* unimplemented variables  -- это норма, тестировать не получится. То, что ругается линтер, так же норма.*/



/* Начальная вместимость стека задаётся определением STACK_CAPACITY */
struct vm_state state_create(const union ins *ip) {
  return (struct vm_state){.ip = ip,
                           .data_stack = stack_create(STACK_CAPACITY)}; //unimplemented
}

// Как правильно деинициализировать состояние, освободить все ресурсы?
void state_destroy(struct vm_state *state) {
    stack_destroy(&state->data_stack);
}


/* Вы можете использовать эти функции: */
void print_int64(int64_t);
struct maybe_int64 maybe_read_int64();

struct stack stack_create(size_t size);
void stack_destroy(struct stack *s);
bool stack_push(struct stack *s, int64_t value);
struct maybe_int64 stack_pop(struct stack *s);

/* Опишите цикл интерпретации с выборкой и выполнением команд (пока не выполним STOP) */
void interpret(struct vm_state *state) {
    while(true){
        switch(state->ip->opcode){
            case BC_PUSH:{
                stack_push(&state->data_stack, state->ip->as_arg64.arg); break;
            }
            case BC_IPRINT:{
                int64_t num = stack_pop(&state->data_stack).value;
                print_int64(num);
                break;
            }
            case BC_IREAD:{
                struct maybe_int64 read_res = maybe_read_int64();
                if (read_res.valid)
                    stack_push(&state->data_stack, read_res.value);
                break;
            }
            case BC_IADD:{
                int64_t first = stack_pop(&state->data_stack).value;
                int64_t second = stack_pop(&state->data_stack).value;
                int64_t res = first + second;
                stack_push(&state->data_stack, res);
                break;
            }
            case BC_STOP:{ return; }
        }
        state->ip += 1;
    }
}

void interpret_program(const union ins *program) {
  struct vm_state state = state_create(program);
  interpret(&state);
  state_destroy(&state);
}