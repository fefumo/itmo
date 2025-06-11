    .data
input_addr:      .word  0x80
output_addr:     .word  0x84

    .text
_start:
    @p input_addr            \ Push the value from input_addr onto the data stack; dataStack.push(mem[<input_addr>])
    b!                       \ b->dataStack.pop(); b = 0x80
    @b                       \ T = n
    >r                       \ R = n for looping over it.
    lit 0 lit 0              \ hw = 0 lw = 0
    next sum_word            \ r --

sum_word:
    \ [hw, lw]
    lit 0 over               \ [hw, 0 , lw], 0 нужен чтобы в add_words для hw можно было сделать + и добавить carry flag
    @b                       \ [hw, 0 lw, num]
    dup                      \ next instruction pops the num from T so duplicate it
    -if check_overflow       \ if num>= 0
    lit 0 eam
    lit 0 if add_words       \ else goto add_words

check_overflow:
    lit 1 eam
add_words:
    +                        \ [hw, 0, lw + num] carry = ?
    a!                       \ a = lw  + num
    +                        \ [hw + 0 + carry] как раз вот тут и используется 0. add - единственная инструкция чтобы вынуть carry flag
    a                        \ T = lw + num
    next sum_word

output:
    @p output_addr           \ a = addr of output_addr
    a!                       \ a = 0x84
    over                     \ [lw, hw]
    ! !                      \ output hw, lw
    halt
