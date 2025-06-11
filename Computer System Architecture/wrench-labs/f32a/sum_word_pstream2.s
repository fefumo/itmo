     .data
input_addr:  .word 0x80
output_addr: .word 0x84

    .org 0x100
    .text
_start:
    init

init:
    @p 0x80       \ Read n from 0x80
    lit -1 +            \ n--
    >r                  \ Save n in return stack
    lit 0 lit 0         \ Initialize high=0, low=0
    lit 0x80      \ Load address of input_addr (0x80)
    b!          \ Set A to input_addr

loop:
    \\\\\\\\\\\\\\\\\\\\\\\\\\\ [high, low]
    lit 0 eam
    lit 0                     \ [high, low, 0]
    over                      \ [high, 0, low]
    @b                        \ Read number- > [high, 0, low, num]
    dup                       \ [high, 0, low, num, num]
    -if check_carry           \ [high, 0, low, num]  if num >= 0 JUMP to check_carry
    lit 0 if no_check_carry   \ else JUMP to no_check_carry
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\ lit 0 if is used instead of procedure call in order not to rewrite loop return pointer
check_carry:
    lit 1 eam
no_check_carry:
    +                   \ [high, 0, low+num] ; carry =? 1
    a!                  \ [high, 0] ; carry =? 1; a = low+num
    +                   \ [high+0+carry] ; a = low+num
    a
    next loop           \ R-- and loop if not zero

output:
    @p output_addr a!   \ Set A to output_addr (0x84)
    over                \ [low, high] <- so top of stack is high
    !                   \ Write high to 0x84
    !                   \ Write low to 0x84
    halt
