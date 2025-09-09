    .data
.org             0x32
input_addr:      .word  0x80               ; Input address where the number 'n' is stored
output_addr:     .word  0x84               ; Output address where the result should be stored
pos_max10:       .byte  '2','1','4','7','4','8','3','6','4','7'  ; +2147483647
neg_max10:       .byte  '2','1','4','7','4','8','3','6','4','8'  ; -2147483648 (abs)

    .data
.org             0x70
num_buf:         .byte  ''                 ; saving digits after `\n`

    .data
.org             0x100
str_buf:         .byte  ''                 ; saving initial string until first `\n`

    .data
.org             0x130
out_str:         .byte  ''                 ; final output string

    .text
    .org     0x500
    ; D0 - temporary symbol in loops
    ; D1 - temporary counter in loops
    ; D2 - number of %d
    ; D3 - number of symbols in out_str
    ; D4 - parsed width
    ; D5 - left-align flag
    ; D6 - pad_count

    ; A0 - input_addr
    ; A1 - output_addr
    ; A2 - str_buf
    ; A3 - num_buf
    ; A4 - out_str

_start:
    movea.l  input_addr, A0
    movea.l  (A0), A0
    movea.l  output_addr, A1
    movea.l  (A1), A1
    movea.l  str_buf, A2

    ; this DOES NOT WORK!
    ; cmp.b 0xA, (A0)
    ; move.b (A0), (A2)+
read_str:
    move.b   (A0), D0                        ; cur symbol
    cmp.b    0x25, D0                        ; `%`
    beq      placeholder_inc
continue_reading:
    cmp.b    0xA, D0                         ; `\n`
    beq      replace_start
    ; beq      print_str
    move.b   D0, (A2)+                       ; write to str_buf
    add.l    1, D1
    cmp.l    0x21, D1                        ; buf max size is 0x20
    beq      input_overflow
    jmp      read_str

placeholder_inc:
    add.l    1, D2
    jmp      continue_reading


replace_start:
    movea.l  str_buf, A2
    movea.l  out_str, A4

    cmp.l    0, D2                           ; if there were no `%`, then just print the string
    beq      print_buf

replace_continue:
    movea.l  num_buf, A3
    cmp.l    0, D2                           ; if no more %d, then print
    beq      print
    ; else keep copying to out_str

copy_buf_until_d:
    move.b   (A2)+, D0
    cmp.b    0x25, D0                        ; if %d then start reading numbers from input
    beq      read_nums
    ; else keep copying to out_str
    move.b   D0, (A4)+
    add.l    1, D3                           ; out_str symbols++
    jmp      replace_continue

read_nums:
    ; --- Parsing the %[-][width]d format specifier ---
    ; A2 points to the character after '%'
    move.l   0, D4                           ; D4 = width
    move.l   0, D5                           ; D5 = 0 (right-aligned)

    ; optional '-'
    move.b   (A2), D0
    cmp.b    0x2D, D0                        ; '-'
    bne      parse_width_start
    move.b   (A2)+, D0                       ; skip '-'
    move.l   1, D5                           ; left-aligned

parse_width_start:
    ; loop for reading decimal digits for width
pw_check_digit:
    move.b   (A2), D0                        ; peek at the current character (ASCII)
    cmp.b    0x30, D0                        ; check if it's less than '0'
    blt      width_done
    cmp.b    0x39, D0                        ; check if it's greater than '9'
    bgt      width_done
    ; it's a digit '0'..'9'

    move.b   (A2)+, D0                       ; consume ASCII digit
    and.b    0x0F, D0                        ; D0 = digit 0..9, also removes high bits of D0

    move.l   10, D1                          ; D4 = D4*10 + digit
    mul.l    D1, D4
    add.l    D0, D4
    jmp      pw_check_digit

width_done:
    ; 'd' is mandatory
    move.b   (A2)+, D0
    cmp.b    0x64, D0                        ; 'd'
    bne      not_a_d

    sub.l    1, D2                           ; accounted for one placeholder

    ; ---Read the number (ASCII) from input until '\n' into num_buf ---
    move.l   0, D1
    movea.l  num_buf, A3
rn_loop:
    move.b   (A0), D0
    cmp.b    0x0A, D0                        ; '\n'
    beq      rn_done
    move.b   D0, (A3)+
    add.l    1, D1
    jmp      rn_loop

rn_done:
    ; --- pad_count = max(0, width - len) ---
    move.l   D4, D6                          ; D6 = width
    move.l   D1, D0                          ; D0 = len
pad_sync:
    cmp.l    0, D0
    beq      pad_ok_len_zero                 ; width - len in D6
    cmp.l    0, D6
    beq      pad_zero                        ; width < len -> pad = 0
    sub.l    1, D0
    sub.l    1, D6
    jmp      pad_sync
pad_ok_len_zero:
    ; D6 already contains width - len (if >= 0)
    jmp      pad_ok
pad_zero:
    move.l   0, D6
pad_ok:
    ; D6 = pad_count
    ; ===== Output with alignment =====
    cmp.l    0, D5
    bne      left_align_branch

    ; ---- RIGHT: leading spaces, then the number ----
prepad_loop:
    cmp.l    0, D6
    beq      emit_num_right
    move.b   0x20, D0                        ; ' '
    move.b   D0, (A4)+
    add.l    1, D3
    sub.l    1, D6
    jmp      prepad_loop

emit_num_right:
    movea.l  num_buf, A3
emit_r:
    cmp.l    0, D1
    beq      replace_continue
    move.b   (A3)+, D0
    move.b   D0, (A4)+
    add.l    1, D3
    sub.l    1, D1
    jmp      emit_r

    ; ---- LEFT: number, then post-padding with spaces ----
left_align_branch:
    movea.l  num_buf, A3
emit_l:
    cmp.l    0, D1
    beq      postpad
    move.b   (A3)+, D0
    move.b   D0, (A4)+
    add.l    1, D3
    sub.l    1, D1
    jmp      emit_l

postpad:
    cmp.l    0, D6
    beq      replace_continue
    move.b   0x20, D0                        ; ' '
    move.b   D0, (A4)+
    add.l    1, D3
    sub.l    1, D6
    jmp      postpad

not_a_d:
    jmp input_overflow ; just to return -1

print:
prepare_print:
    movea.l  out_str, A4
print_out:
    move.b   (A4)+, D0
    move.b   D0, (A1)
    sub.l    1, D3
    cmp.l    0, D3
    beq      end
    jmp      print_out

print_buf:
    ; at this point, it's still buf_size in D1
prep_print_buf:
    movea.l  str_buf, A2
print_loop:
    move.b   (A2)+, D0
    move.b   D0, (A1)
    sub.l    1, D1
    cmp.l    0, D1
    beq      end
    jmp      print_loop

end:
    halt

input_overflow:
    ; return -1
    move.b   0x2D, D0                        ; '-'
    move.b   D0, (A1)
    move.b   0x31, D0                        ; '1'
    move.b   D0, (A1)
    halt
