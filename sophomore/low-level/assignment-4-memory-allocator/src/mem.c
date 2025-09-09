#define _DEFAULT_SOURCE

#include <assert.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <unistd.h>

#include "mem.h"
#include "mem_internals.h"
#include "util.h"

void debug_block(struct block_header *b, const char *fmt, ...);
void debug(const char *fmt, ...);

extern inline block_size size_from_capacity(block_capacity cap);
extern inline block_capacity capacity_from_size(block_size sz);

static bool block_is_big_enough(size_t query, struct block_header *block) {
  return block->capacity.bytes >= query;
}
static size_t pages_count(size_t mem) {
  return mem / getpagesize() + ((mem % getpagesize()) > 0);
}
static size_t round_pages(size_t mem) {
  return getpagesize() * pages_count(mem);
}

static void block_init(void *restrict addr, block_size block_sz,
                       void *restrict next) {
  *((struct block_header *)addr) = (struct block_header){
      .next = next, .capacity = capacity_from_size(block_sz), .is_free = true};
}

static size_t region_actual_size(size_t query) {
  return size_max(round_pages(query), REGION_MIN_SIZE);
}

extern inline bool region_is_invalid(const struct region *r);

static void *map_pages(void const *addr, size_t length, int additional_flags) {
  return mmap((void *)addr, length, PROT_READ | PROT_WRITE,
              MAP_PRIVATE | MAP_ANONYMOUS | additional_flags, -1, 0);
}

/*  аллоцировать регион памяти и инициализировать его блоком */

static struct region alloc_region(void const *addr, size_t query) {
  size_t region_size = region_actual_size(query);
  if (query == REGION_MIN_SIZE)
    region_size += getpagesize();

  bool extends = true;

  void *region_pointer = map_pages(addr, region_size, MAP_FIXED);
  if (region_pointer == MAP_FAILED) {
    extends = false;

    region_pointer = map_pages(addr, region_size, 0);
    if (region_pointer == MAP_FAILED)
      return REGION_INVALID;
  }

  block_init(region_pointer, (block_size){.bytes = region_size}, NULL);
  return (struct region){
      .addr = region_pointer, .size = region_size, .extends = extends};
}

static void *block_after(struct block_header const *block);

void *heap_init(size_t initial) {
  const struct region region = alloc_region(HEAP_START, initial);
  if (region_is_invalid(&region))
    return NULL;

  return region.addr;
}

/*  освободить всю память, выделенную под кучу */
static bool blocks_continuous(struct block_header const *fst,
                              struct block_header const *snd);

void heap_term() {
  void *start_addr = HEAP_START;
  if (!start_addr)
    return;

  struct block_header *current = (struct block_header *)start_addr;

  while (current != NULL) {
    struct block_header *next = current->next;

    size_t region_length = size_from_capacity(current->capacity).bytes;

    while (next != NULL && blocks_continuous(current, next)) {
      region_length += size_from_capacity(next->capacity).bytes;
      current = next;
      next = current->next;
    }

    if (munmap(start_addr, region_length) < 0) {
      perror("Heap dealloc error. we lost.");
      break;
    }

    start_addr = next;
    current = next;
  }
}

#define BLOCK_MIN_CAPACITY 24

/*  --- Разделение блоков (если найденный свободный блок слишком большой )--- */

static bool block_splittable(struct block_header *restrict block,
                             size_t query) {
  return block->is_free &&
         query + offsetof(struct block_header, contents) + BLOCK_MIN_CAPACITY <=
             block->capacity.bytes;
}

static bool split_if_too_big(struct block_header *block, size_t query) {
  if (!block || !block_splittable(block, query)) {
    return false;
  }
  void *current_block = (void *)block;
  size_t first_block_size =
      size_from_capacity((block_capacity){size_max(query, BLOCK_MIN_CAPACITY)})
          .bytes;
  size_t second_block_size =
      size_from_capacity(block->capacity).bytes - first_block_size;
  struct block_header *second_block_addr =
      (void *)block + first_block_size;
  block_init(second_block_addr, (block_size){.bytes = second_block_size},
             block->next);
  block_init(block, (block_size){.bytes = first_block_size}, second_block_addr);
  return true;
}

/*  --- Слияние соседних свободных блоков --- */

static void *block_after(struct block_header const *block) {
  return (void *)(block->contents + block->capacity.bytes);
}
static bool blocks_continuous(struct block_header const *fst,
                              struct block_header const *snd) {
  return (void *)snd == block_after(fst);
}

static bool mergeable(struct block_header const *restrict fst,
                      struct block_header const *restrict snd) {
  return fst->is_free && snd->is_free && blocks_continuous(fst, snd);
}

static bool try_merge_with_next(struct block_header *block) {
  if (!block)
    return false;

  if (block->next != NULL && mergeable(block, block->next)) {
    block->capacity.bytes += size_from_capacity(block->next->capacity).bytes;
    block->next = block->next->next;
    return true;
  }

  return false;
}

/*  --- ... ecли размера кучи хватает --- */

struct block_search_result {
  enum { BSR_FOUND_GOOD_BLOCK, BSR_REACHED_END_NOT_FOUND, BSR_CORRUPTED } type;
  struct block_header *block;
};

extern inline struct block_search_result
block_search_result_constructor(int type, struct block_header *block) {
  return (struct block_search_result){.type = type, .block = block};
}

static struct block_search_result
find_good_or_last(struct block_header *restrict block, size_t sz) {
  if (!block) {
    return block_search_result_constructor(BSR_CORRUPTED, NULL);
  }

  struct block_header *current = block;

  while (current) {
    while (try_merge_with_next(current))
      ;

    if (block_is_big_enough(sz, current) && current->is_free)
      return block_search_result_constructor(BSR_FOUND_GOOD_BLOCK, current);

    if (!current->next)
      return block_search_result_constructor(BSR_REACHED_END_NOT_FOUND,
                                             current);

    current = current->next;
  }

  return block_search_result_constructor(BSR_REACHED_END_NOT_FOUND, current);
}

/*  Попробовать выделить память в куче начиная с блока `block` не пытаясь
 расширить кучу Можно переиспользовать как только кучу расширили. */
static struct block_search_result
try_memalloc_existing(size_t query, struct block_header *block) {
  if (!block)
    return block_search_result_constructor(BSR_CORRUPTED, block);
  struct block_search_result result = find_good_or_last(block, query);
  if (result.type == BSR_FOUND_GOOD_BLOCK) {
    split_if_too_big(result.block, query);
    result.block->is_free = false;
  }
  return result;
}

static struct block_header *grow_heap(struct block_header *restrict last,
                                      size_t query) {
  if (!last)
    return NULL;

  struct region new_region = alloc_region(block_after(last), query);
  if (region_is_invalid(&new_region))
    return NULL;

  last->next = (struct block_header *)new_region.addr;
  if (try_merge_with_next(last))
    return last;

  return (struct block_header *)new_region.addr;
}

/*  Реализует основную логику malloc и возвращает заголовок выделенного блока */
static struct block_header *memalloc(size_t query,
                                     struct block_header *heap_start) {
  if (!heap_start)
    return NULL;

  struct block_search_result search_result =
      try_memalloc_existing(query, heap_start);

  if (search_result.type == BSR_FOUND_GOOD_BLOCK) {
    return search_result.block;
  }

  if (!search_result.block)
    return NULL;

  // then we found BSR_REACHED_END_NOT_FOUND. try grow
  struct block_header *additional_heap_space =
      grow_heap(search_result.block, query);

  if (!additional_heap_space)
    return NULL;
  // merge
  search_result.block->next = additional_heap_space;
  // split it if possible
  search_result = try_memalloc_existing(query, heap_start);
  return search_result.block;
}

void *_malloc(size_t query) {
  if (query % 8 != 0) {
    query = query + (8 - query % 8);
  }
  struct block_header *const addr =
      memalloc(query, (struct block_header *)HEAP_START);
  if (addr)
    return addr->contents;
  else
    return NULL;
}

static struct block_header *block_get_header(void *contents) {
  return (struct block_header *)(((uint8_t *)contents) -
                                 offsetof(struct block_header, contents));
}

void _free(void *mem) {
  if (!mem)
    return;
  struct block_header *header = block_get_header(mem);
  header->is_free = true;
  while (try_merge_with_next(header))
    ;
}
