    .data
buffer:          .byte  '________________________________'
input_addr:      .word  0x80
output_addr:     .word  0x84               ; Output address where the result should be stored
const_5f:        .word  0x5f
overflow_const:  .word  0xCCCCCCCC
str_ptr:         .word  0x100

    .text
    .org     0x2000

    ;Берем регистр S1, который указывает на какую то область в памяти.
    ;В него будем читать из инпута побайтово строку пока не встретим `\n` = `0xA`.
    ;Затем нам нужно декрементируя регистр записывать строку в буфер
    ;И ОДНОВРЕМЕННО в аутпут.
    ;В конце не забыть добавить 0x0 в buffer.

_start:
    addi     a2, a2, 10                      ; a2 = `\n`
    addi     a6, a6, 32                      ; for overflow check
    addi     a7, a7, 0                       ; for end of string check

    lui      t2, %hi(buffer)                 ; t2 is the buffer pointer
    addi     t2, t2, %lo(buffer)

    lui      t0, %hi(input_addr)
    addi     t0, t0, %lo(input_addr)
    lw       t0, 0(t0)                       ; t0 = 0x80

    lui      t1, %hi(output_addr)
    addi     t1, t1, %lo(output_addr)
    lw       t1, 0(t1)                       ; t1 = 0x84

    lui      s1, %hi(str_ptr)
    addi     s1, s1, %lo(str_ptr)
    lw       s1, 0(s1)                       ; s1 is the string pointer

    ; edge case: first symbol = `\n`
    lw       a1, 0(t0)
    beq      a1, a2, edge_case

    ; else make 1 iteration of read_string
    sb       a1, 0(s1)                       ; M[s1] <- a1
    addi     s1, s1, 1                       ; s1 <- s1 + 1
    addi     a3, a3, 1                       ; counter++

    j        read_string

edge_case:
    sb       a1, 0(t2)                       ; M[t2] <- a1 write to buffer
    addi     a4, a4, 1                       ; number of byes written = 1
    j        prepare_fill_buffer


read_string:
    beq      a3, a6, end_overflow            ; if counter == 32, then end_overflow
    lw       a1, 0(t0)                       ; load cur symbol
    sb       a1, 0(s1)                       ; M[s1] <- a1
    addi     s1, s1, 1                       ; s1 <- s1 + 1
    addi     a3, a3, 1                       ; counter++

    beq      a1, a2, prepare_reverse_string  ; if a1 == `\n` then reverse_string
    beq      a1, a7, set_flag                ; if a1 == `0x0` then we have to set flag for it
    j        read_string

set_flag:
    addi     s9, s9, 1                       ; checked in prepare_fill_buffer section

prepare_reverse_string:
    add      a4, a4, a3                      ; copy `counter` value for <fill_buffer> step
    addi     a3, a3, -1
    addi     s1, s1, -2                      ; skip `\n` and +1 iteration at the end of read_stirng

reverse_string:
    ; load byte into buffer
    lw       a1, 0(s1)                       ; a1 <- m[s1]
    sb       a1, 0(t2)                       ; m[t2] <- a1

    ; print
    sb       a1, 0(t1)                       ; m[t1] <- a1

    addi     s1, s1, -1                      ; str_ptr--
    addi     a3, a3, -1                      ; counter--


    addi     t2, t2, 1                       ; buffer++

    beqz     a3, prepare_fill_buffer         ; if counter == 0: goto prepare_fill_buffer
    j        reverse_string

prepare_fill_buffer:
    sub      a1, a1, a1                      ; a1 = 0
    sb       a1, 0(t2)                       ; m[t2] <- a1 end of c string
    addi     t2,t2, 1
  
    ; if the word had `0x0` (s9>0) then we have to fill in the rest of input first
    bnez     s9, put_rest_of_input_in_buffer

    addi     a5, a5, 32                      ; hardcoded number of bytes in the buffer. needed for <fill_buffer> step
    sub      a5, a5, a4                      ; check how many bytes have to be filled with `f5`

    beqz     a5, end                         ; if no bytes needed to be filled, then end

    ;load 5f
    lui      a1, %hi(const_5f)
    addi     a1, a1, %lo(const_5f)
    lw       a1, 0(a1)                       ; a1 = 5f
    j        fill_buffer

put_rest_of_input_in_buffer:
    lw       a1, 0(t0)
    sb       a1, 0(t2)                       ; M[t2] <- a1
    beq      a1, a2, buffer_flag_reset
    addi     t2, t2, 1                       ; buffer++
    addi     a4, a4, 1                       ; counter++
    j        put_rest_of_input_in_buffer

buffer_flag_reset:
    addi     s9, s9, -1
    j        prepare_fill_buffer

fill_buffer:
    sb       a1, 0(t2)
    addi     t2, t2, 1                       ; t2++
    addi     a5, a5, -1                      ; a5--
    beqz     a5, end
    j        fill_buffer

end_overflow:
    lui      a1, %hi(overflow_const)
    addi     a1, a1, %lo(overflow_const)
    lw       a1, 0(a1)                       ;a1 = overflow_const

    sw       a1, 0(t1)

end:
    halt