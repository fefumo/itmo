#include <image.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>


static struct image create_image_from_source(struct image const source){
    struct image new_image = {0};
    new_image.height = source.height;
    new_image.width = source.width;
    new_image.data = malloc(sizeof(struct pixel) * source.height * source.width);
    if (new_image.data == NULL){
        new_image.status = IMAGE_ERROR_MEM;
    }
    return new_image;
}

static struct image create_rotaded_image_from_source(struct image const source){
    struct image new_image = {0};
    new_image.height = source.width;
    new_image.width = source.height;
    new_image.data = malloc(sizeof(struct pixel) * source.height * source.width);
    if (new_image.data == NULL){
        new_image.status = IMAGE_ERROR_MEM;
    }
    return new_image;
}

struct image transform(enum transformation transform_type, struct image const source){
    switch (transform_type)
    {
    case CW90:
        return transform_cw90(source);
    case CCW90:
        return transform_ccw90(source);
    case FLIPH:
        return transform_flip_h(source);
    case FLIPV:
        return transform_flip_v(source);
    default:
        return source;
    }
}

struct image transform_cw90(struct image const source){
    fprintf(stdout, "transforming clockwise 90 degrees\n");
    struct image out_img = create_rotaded_image_from_source(source);
    if (out_img.status == IMAGE_ERROR_MEM)
        return out_img;
    for (size_t i = 0; i < source.height; i++){
        for (size_t j = 0; j < source.width; j++){
            out_img.data[j * out_img.width + i] = source.data[i * source.width + (source.width - j - 1)];
        }
    }
    return out_img;
}

struct image transform_ccw90(struct image const source){
    fprintf(stdout, "transforming counterclockwise 90 degrees\n");
    struct image out_img = create_rotaded_image_from_source(source);
    if (out_img.status == IMAGE_ERROR_MEM)
        return out_img;
    for (size_t i = 0; i < source.height; i++){
        for (size_t j = 0; j < source.width; j++){
            out_img.data[j * out_img.width + (out_img.width - i - 1)] = source.data[i * source.width + j];
        }
    }
    return out_img;
}


struct image transform_flip_h(struct image const source){
    fprintf(stdout, "flipping horizontally\n");
    struct image out_img = create_image_from_source(source);
    if (out_img.status == IMAGE_ERROR_MEM)
        return out_img;
    for (size_t i = 0; i <  source.height; i++){
        for (size_t j = 0; j < (out_img.width + 1) / 2; j++) {
            out_img.data[i * out_img.width + j] = source.data[i * source.width + (source.width - j - 1)];
            out_img.data[i * out_img.width + (out_img.width - j - 1)] = source.data[i * source.width + j];
        }
    }
    return out_img;
}

struct image transform_flip_v(struct image const source){\
    fprintf(stdout, "flipping vertically\n");
    struct image out_img = create_image_from_source(source);
    if (out_img.status == IMAGE_ERROR_MEM)
        return out_img;
    for (size_t i = 0; i < (out_img.height + 1) / 2; ++i) {
        for (size_t j = 0; j < out_img.width; ++j) {
            out_img.data[i * out_img.width + j] = source.data[(source.height - i - 1) * source.width + j];
            out_img.data[(out_img.height - i - 1) * out_img.width + j] = source.data[i * source.width + j];
        }
    }
    return out_img;
}

void free_image(struct image* img){
    if (img){
        if (img->data){
            free(img->data);
            img->data = NULL;
        }
    }
}
