/* stack.c */
#include <headers_first.h>

struct stack_int {
  item *items;
  size_t maxcount;
  size_t count;
};

static const size_t STACK_LIMIT = 128;

struct stack_int *stack_int_create() {
  struct stack_int *const result = malloc(sizeof(struct stack_int));
  *result =
      (struct stack_int){malloc(STACK_LIMIT * sizeof(item)), STACK_LIMIT, 0};
  return result;
}

void stack_int_destroy(struct stack_int *s) { free(s->items); free(s); }

bool stack_int_empty(struct stack_int const *s) { return s->count == 0; }

bool stack_int_full(struct stack_int const *s) {
  return s->maxcount == s->count;
}

bool stack_int_push(struct stack_int *s, item i) {
  if (stack_int_full(s)) {
    return false;
  }
  s->count = s->count + 1;
  s->items[s->count] = i;
  return true;
}

struct maybe_item stack_int_pop(struct stack_int *s) {
  if (stack_int_empty(s)) {
    return none_int;
  }
  const struct maybe_item result = some_int(s->items[s->count].value);
  s->count = s->count - 1;
  return result;
}

static void stack_int_foreach(struct stack_int const* s, void (f) (item)) {
  for (size_t i = 0; i < s->count; i = i + 1) {
    f(s->items[i]);
  }
}
static void print_int64(item i) { printf("%" STACK_ITEM_PRI "\n", i.value); }

void stack_int_print(struct stack_int const* s) {
  stack_int_foreach( s, print_int64 );
}