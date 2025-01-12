#pragma once

#include <stdint.h>
#include <stdio.h>

enum image_status {
    IMAGE_OK = 0,
    IMAGE_ERROR_MEM,
};

struct image {
    uint64_t width, height;
    struct pixel* data;
    enum image_status status;
};

struct pixel {
    uint8_t r,g,b; 
};

enum transformation {
    NONE = 0,
    CW90,
    CCW90,
    FLIPH,
    FLIPV,
    UNKNOWN
};

// transformations
struct image transform_cw90(struct image const source);
struct image transform_ccw90(struct image const source);
struct image transform_flip_h(struct image const source);
struct image transform_flip_v(struct image const source);

extern struct image transform(enum transformation transform_type, struct image const source);

extern void free_image(struct image* img);
