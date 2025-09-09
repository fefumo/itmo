#pragma once

#include <image.h>
#include <stdint.h>
#include <stdio.h>


#define BMP_FTYPE 0x4D42
#define BMP_RESERVED 0
#define BMP_SIZE 40
#define BMP_PLANES 1
#define BMP_BIT_COUNT 24
#define BMP_COMPRESSION 0
#define BMP_X_PELS_PER_METER 0
#define BMP_Y_PELS_PER_METER 0
#define BMP_CLR_USED 0
#define BMP_CLR_IMPORTANT 0

extern const char* read_status_names[];
extern const char* write_status_names[];

struct __attribute__((packed)) bmp_header
{
        uint16_t bfType;
        uint32_t bfileSize;
        uint32_t bfReserved;
        uint32_t bOffBits;
        uint32_t biSize;
        uint32_t biWidth;
        uint32_t biHeight;
        uint16_t biPlanes;
        uint16_t biBitCount;
        uint32_t biCompression;
        uint32_t biSizeImage;
        uint32_t biXPelsPerMeter;
        uint32_t biYPelsPerMeter;
        uint32_t biClrUsed;
        uint32_t biClrImportant;
};

enum read_status {
    READ_OK = 0,
    READ_INVALID_SIGNATURE,
    READ_INVALID_BITS,
    READ_INVALID_HEADER,
    READ_ALLOC_ERR
};

enum write_status {
    WRITE_OK = 0,
    WRITE_ERROR
};


extern enum read_status from_bmp( FILE* in, struct image* img );
extern enum write_status to_bmp( FILE* out, struct image const* img );
