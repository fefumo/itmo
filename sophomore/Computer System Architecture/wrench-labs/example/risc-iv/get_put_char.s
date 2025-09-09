    .data

input_addr:      .word  0x80
output_addr:     .word  0x84               ; Output address where the result should be stored
buffer: .byte 

    .text

_start:
    ; загружаем адрес метки input_addr в t0
    lui      t0, %hi(input_addr)             ; int * input_addr_const = *input_addr;
    addi     t0, t0, %lo(input_addr)
    
    ; загружаем значение по адресу метки с офсет = 0. t0 = 0x80 
    lw       t0, 0(t0)                       ; int output_addr = *output_addr_const;

    ; загружаем адрес метки output_addr в t1
    lui      t1, %hi(output_addr)            ; int * output_addr_const = *output_addr;
    addi     t1, t1, %lo(output_addr)

    ; загружаем значение по адресу метки с офсет = 0. t1 = 0x84
    lw       t1, 0(t1)                       ; int output_addr = *output_addr_const;

    ; загружаем значение по адресу t0 = 0x80 в t2
    lw       t2, 0(t0)                       ; tmp = *input_addr
    ; сохраняем значение ИЗ Т2 В АДРЕС T1  
    sb       t2, 0(t1)                       ; *output_addr = tmp;

    ;lw t0, 0(t0)
    ;sb t2, 0(t1)

    halt