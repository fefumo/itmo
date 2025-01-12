#include <bmp.h>
#include <errno.h>
#include <image.h>
#include <stdio.h>
#include <util.h>

int main( int argc, char** argv ) {    
    (void) argc; (void) argv; // supress 'unused parameters' warning

    if (argc != 4){
        fprintf(stderr, "Incorrect amount of arguments. Input format: ./image-transform <source-image> <transformed-image> <tranformation>\n");
        return EPERM;
    }

    // zero index is the program name
    const char* source_image = argv[1];
    const char* target_fname = argv[2];
    const char* operation = argv[3];

    FILE* src_file = fopen(source_image, "rb");
    if (!src_file){
        fprintf(stderr, "Can't open source file %s, check access rights and proper name.\n", source_image);
        return ENOENT;
    }

    struct image img = {0};
    enum read_status read_result = from_bmp(src_file, &img);
    fclose(src_file);

    printf("Read result is: %s\n", read_status_names[read_result]);
    if (read_result != READ_OK){
        free_image(&img);
        return ENOMEM; // is this correct handling? please help i don't understand :(
    }
    printf("Image size : %zu bytes\n", sizeof(struct pixel) * img.width * img.height);

    printf("Transforming...\n");

    enum transformation transformation = get_transformation_from_string(operation);
    if (transformation == UNKNOWN){
        free_image(&img);
        fprintf(stderr, "Unknown transformation type.\n Avaliable types are:\n none\n cw90\n ccw90\n fliph\n flipv\n unknown\n");
        return EINVAL;
    }

    /*
        can't just use transform on initial "img" becuase 
        img->data would be changed while transforming.
        therefore, we would have memory leak.
    */

    struct image new_image = transform(transformation, img);
    if (new_image.status == IMAGE_ERROR_MEM){
        free_image(&img);
        free_image(&new_image);
        fprintf(stderr, "Allocation error occured during transorming.");
        return ENOMEM;
    }

    printf("Writing to a file...\n");

    FILE* out_file = fopen(target_fname, "wb");
    if (!out_file){
        free_image(&img);
        free_image(&new_image);
        fprintf(stderr, "Can't open target file %s.\n", target_fname);
        return ENOENT;
    }

    enum write_status write_result = to_bmp(out_file, &new_image);

    printf("write result is: %s\n", write_status_names[write_result]);
    fclose(out_file);

    if (write_result != WRITE_OK){
        free_image(&new_image);
        free_image(&img);
        fprintf(stderr,"Error occured during writing to %s.\n", target_fname);
        return write_result;
    }

    free_image(&img);
    /* if its none, then both images refer to the same data which would lead to segfault */
    if (transformation != NONE)
        free_image(&new_image);

    return 0;
}
