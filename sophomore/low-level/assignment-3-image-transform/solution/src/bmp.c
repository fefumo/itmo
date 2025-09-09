#include <bmp.h>
#include <image.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <util.h>

const char* read_status_names[] = {
    [READ_OK] = "READ_OK",
    [READ_INVALID_BITS] = "READ_INVALID_BITS",
    [READ_INVALID_HEADER] = "READ_INVALID_HEADER",
    [READ_INVALID_SIGNATURE] = "READ_INVALID_SIGNATURE",
    [READ_ALLOC_ERR] = "READ_ALLOC_ERR"
};

const char* write_status_names[] = {
    [WRITE_OK] = "WRITE_OK",
    [WRITE_ERROR] = "WRITE_ERROR"
};

enum read_status from_bmp( FILE* in, struct image* img ){

    struct bmp_header header = {0};

    uint8_t fread_result = fread(&header, sizeof(header), 1, in);
    if (fread_result != 1){
        return READ_INVALID_HEADER;
    }

    if (header.bfType != 0x4D42) {  // 'BM' in ASCII
        return READ_INVALID_SIGNATURE;
    }

    img->width = header.biWidth;
    img->height = header.biHeight;
    if (img->width <= 0 || img->height <= 0) {
        return READ_INVALID_HEADER;
    }

    img->data = malloc(sizeof(struct pixel) * img->width * img->height);
    if (img->data == NULL) {
        return READ_ALLOC_ERR;
    }

    const uint8_t padding = calculate_padding(img->width);

    if (fseek(in, (long)header.bOffBits, SEEK_SET) != 0) {
        free(img->data);
        return READ_INVALID_BITS;
    }

    for (size_t i = 0; i < img->height; i++){
        struct pixel* row = i * img->width + img->data;
        size_t read_pixels = fread(row, sizeof(struct pixel), img->width, in);

        if (read_pixels != img->width){
            free(img->data);
            return READ_INVALID_BITS;
        }

        if (padding > 0 && fseek(in, padding, SEEK_CUR) != 0) {
            free(img->data);
            return READ_INVALID_BITS;
        }

    }

    return READ_OK;
}



enum write_status to_bmp( FILE* out, struct image const* img ){
    
    struct bmp_header bmp;

    const uint8_t padding = calculate_padding(img->width);
    const uint64_t BMP_SIZE_IMAGE = (img->width * sizeof(struct pixel) + padding) * img->height;

    bmp.bfType = BMP_FTYPE;
    bmp.bfileSize = BMP_SIZE_IMAGE + sizeof(struct bmp_header);
    bmp.bfReserved = BMP_RESERVED;
    bmp.bOffBits = sizeof(struct bmp_header);
    bmp.biSize = BMP_SIZE;
    bmp.biWidth = img->width;
    bmp.biHeight = img->height;
    bmp.biPlanes = BMP_PLANES;
    bmp.biBitCount = BMP_BIT_COUNT;
    bmp.biCompression = BMP_COMPRESSION;
    bmp.biSizeImage = BMP_SIZE_IMAGE;
    bmp.biXPelsPerMeter = BMP_X_PELS_PER_METER;
    bmp.biYPelsPerMeter = BMP_Y_PELS_PER_METER;
    bmp.biClrUsed = BMP_CLR_USED;
    bmp.biClrImportant = BMP_CLR_IMPORTANT;

    // write header
    if (fwrite(&bmp, sizeof(struct bmp_header), 1, out) != 1 ){
        return WRITE_ERROR;
    }

    /* 
        apparently, cannot use just "uint8_t byte = 0" here. 
        fwrite would not be working correctly causing buffer_overflow,
        because it needs a pointer to data, which will be used "padding" times.
    */
    uint8_t padding_bytes[3] = {0};

    // write data
    for (size_t i = 0; i < img->height; i++){
        const struct pixel*  row  = img->width * i + img->data;
        size_t write_pixels = fwrite(row, sizeof(struct pixel), img->width, out);

        if (write_pixels != img->width){
            return WRITE_ERROR;
        }

        if (padding > 0){
            if (fwrite(padding_bytes, 1, padding, out) != padding){
                return WRITE_ERROR;
            }
        }
    }

    return WRITE_OK;
}
