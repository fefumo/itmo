#include <image.h>
#include <stdint.h>
#include <string.h>


uint8_t calculate_padding(uint64_t width) {
    uint8_t padding = (4 - (width * sizeof(struct pixel) % 4));
    if (padding == 4) padding = 0;
    return padding;
}

enum transformation get_transformation_from_string(const char* string){
    if (strcmp("cw90", string) == 0) return CW90;
    if (strcmp("ccw90", string) == 0) return CCW90;
    if (strcmp("fliph", string) == 0) return FLIPH;
    if (strcmp("flipv", string) == 0) return FLIPV;
    if (strcmp("none", string) == 0) return NONE;
    return UNKNOWN;
}
