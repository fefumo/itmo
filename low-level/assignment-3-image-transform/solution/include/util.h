#pragma once
#include <bmp.h>
#include <image.h>
#include <stdint.h>
#include <stdio.h>

extern uint8_t calculate_padding(uint64_t width);
extern enum transformation get_transformation_from_string(const char* string);
