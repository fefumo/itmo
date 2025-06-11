    .data
input_addr:      .word  0x80               ; Input address where the number 'n' is stored
output_addr:     .word  0x84               ; Output address where the result should be stored
bits_to_shift:   .word  1
rev:             .word  0                  ; Variable that will have the reversed rightmost part of input
initial_number:  .word  0
temp:            .word  0                  ; This value will be shifted right on every iteration (copy of initial) to get the digits from it
final_value:     .word  0                  ; This value will be compared to the initial one
current_bit:     .word  0
const_1:         .word  1
count:           .word  32

.org             0x0123                    ; In decimal == 291
result_num:      .word  0x00               ; Result number address, for debugging

    .text
_start:
    load_ind     input_addr                  ; acc = mem[mem[input_addr]]
    store        initial_number              ; Copy input value for result checking
    store        temp
    store        final_value
    load         count

palindrome_while:
    beqz         check_equality              ; {while  count != 0
    load         temp
    and          const_1                     ; logical AND to get the right bit
    store        current_bit
    load temp
    shiftr       bits_to_shift
    store        temp

    load         rev
    or           current_bit                 ; append to the reversed
    store        final_value                 ; if we compare the rev in check_equality, then rev is gonna be shifted 1 more time which is incorrect behavior
    shiftl       bits_to_shift               ; shift to add space
    store        rev

    load         count
    sub          const_1
    store        count
    jmp          palindrome_while

check_equality:
    load         initial_number
    sub          final_value
    beqz         correct                     ; initial - reversed == 0 ? correct : false
    jmp          false

end:
    halt

correct:
    load_imm     1
    store_ind    output_addr
    jmp          end

false:
    load_imm     0
    store_ind    output_addr
    jmp          end
