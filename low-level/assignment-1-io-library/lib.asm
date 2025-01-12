%define SYS_EXIT 60
%define SYS_READ 0
%define SYS_WRITE 1
%define OUT_FD 1
%define IN_FD 0

section .text
    global exit
    global string_length
    global print_string
    global print_char
    global print_newline
    global print_uint
    global print_int
    global string_equals
    global read_char
    global read_word
    global parse_uint
    global parse_int
    global string_copy

; Принимает код возврата и завершает текущий процесс
exit: 
    mov rax, SYS_EXIT
    xor rdi, rdi
    syscall

; Принимает указатель на нуль-терминированную строку, возвращает её длину
; as can be seen from the test, rdi is the pointer
string_length:
    xor rax, rax ; rax will store the result 

.count:
    cmp byte [rdi], 0 ; if cur symbol is null, return
    je .end
    inc rax ; else increase the counter
    inc rdi ; and go to the next symbol
    jmp .count
.end:
    ret

; Принимает указатель на нуль-терминированную строку, выводит её в stdout
print_string:
    push rdi
    call string_length
    pop rdi

    mov rdx, rax ; put str_length into rdx (rax has it from string_length func)
    mov rsi, rdi ; put string pointer into rsi for syscall

    mov rax, SYS_WRITE
    mov rdi, OUT_FD

    syscall
    ret

; Переводит строку (выводит символ с кодом 0xA)
print_newline:
    mov rdi, `\n`

; Принимает код символа и выводит его в stdout
; rdi is the value
print_char:
    push rdi
    mov rsi, rsp ; rsi now points to rdi value

    mov rax, SYS_WRITE
    mov rdi, OUT_FD
    mov rdx, 1
    
    syscall
    pop rdi ; restore the rdi
    ret


; Выводит беззнаковое 8-байтовое число в десятичном формате 
; Совет: выделите место в стеке и храните там результаты деления
; Не забудьте перевести цифры в их ASCII коды.
print_uint:
    mov rax, rdi ; move the unsigned integer from rdi to rax
    mov rcx, 10 ; set the divisor to 10 for decimal conversion
    mov r11, rsp ; save cur rsp
    sub rsp, 24 ; allocate space on the stack for the string
    dec r11
    mov byte [r11], 0 ; null terminate

.divide:
    xor rdx, rdx ; clear rdx before division
    div rcx ; divide rax by 10, quotient in rax, remainder in rdx
    add dl, '0' ; convert remainder to ASCII
    dec r11 ; move pointer for the next digit
    mov [r11], dl ; store the ASCII digit in the buffer
    test rax, rax ; check if the quotient is 0
    jnz .divide ; if not zero, continue dividing

    mov rdi, r11 ; set rdi to point to the resulting string
    call print_string ; call function to print the string

    add rsp, 24 ; restore the stack pointer
    ret ; return from the function

; Выводит знаковое 8-байтовое число в десятичном формате 
print_int:
    test rdi, rdi
    jns .print 
    push rdi 
    mov rdi, '-'
    call print_char
    pop rdi
    neg rdi

    .print:
        jmp print_uint

; Принимает два указателя на нуль-терминированные строки, возвращает 1 если они равны, 0 иначе
; rdi and rsi are the pointers
string_equals:
    
.loop:
    mov al, byte [rdi] ; store rdi value in rcx(al)
    mov dl, byte[rsi] ; store rsi value in rdx(dl)

    cmp al, dl ; check if the chars are equal
    jne .not_equal ; if not, return
    test al, al ; else check for zero (null-terminator)
    jz .end ;if its zero, go to return section
    
    ;if not, inc the pointers (the chars are equal at this point) and repeat
    inc rdi
    inc rsi
    jmp .loop 

.not_equal:
    xor rax, rax ; result
    ret

.end:
    xor rax, rax
    inc rax ;result
    ret

; Читает один символ из stdin и возвращает его. Возвращает 0 если достигнут конец потока
read_char:
    push 0 ; manually push zero as if it was from eof
    mov rax, SYS_READ
    mov rdi, IN_FD
    mov rsi, rsp
    mov rdx, 1 
    ; basic read syscall
    syscall
    ; at this point, we have the symbol on top of stack, so pop in to return
    ; if it was eof, then we would return 0 that we pushed earlier
    pop rax
    ret

; Принимает: адрес начала буфера, размер буфера
; Читает в буфер слово из stdin, пропуская пробельные символы в начале, .
; Пробельные символы это пробел 0x20, табуляция 0x9 и перевод строки 0xA.
; Останавливается и возвращает 0 если слово слишком большое для буфера
; При успехе возвращает адрес буфера в rax, длину слова в rdx.
; При неудаче возвращает 0 в rax
; Эта функция должна дописывать к слову нуль-терминатор

; rdi has the word buffer addr, rsi has the size
read_word:
    sub rsp, 24
    xor rcx, rcx ; counter of chars
    mov r8, rdi ; save buf addr
    
.read_loop:

    push rdi
    push rsi
    push rcx
    push r8
    call read_char ;rax has the char
    pop r8
    pop rcx
    pop rsi
    pop rdi

    ;check leading space chars
    cmp rax, ' '
    je .skip
    cmp rax, `\t`
    je .skip
    cmp rax, `\n`
    je .skip

    cmp rcx, rsi ; compare character count with buffer size
    jge .no_success ; if we've exceeded the buffer, fail

    test rax, rax ; check if EOF
    je .success ; if EOF, end successfully

    mov byte [rdi], al ; store the character in the buffer
    inc rcx ; increment character count
    inc rdi ; move to the next buffer position

    jmp .read_loop ; continue the loop

.skip:
    test rcx, rcx
    jnz .success ; if we have read the word and its length is not zero - go to end
    jmp .read_loop ; otherwise its leading whitespaces, so continue reading

.success:
    mov byte [rdi], 0 ; add null-terminator
    mov rdx, rcx ; put length in rdx
    mov rax, r8 ; put addres in rax

    add rsp, 24
    ret

.no_success:
    xor rax, rax
 
    add rsp, 24
    ret

; Принимает указатель на строку, пытается
; прочитать из её начала беззнаковое число.
; Возвращает в rax: число, rdx : его длину в символах
; rdx = 0 если число прочитать не удалось
parse_uint:
    xor rax, rax ; clear rax to store the resulting number 
    xor rdx, rdx ; clear rdx to store the length 
    mov r10, 10

parse_loop:
    mov cl, byte [rdi] ; load a byte from the string into rcx
    test cl, cl ; check if we have reached the null-terminator 
    je end_parse ; if yes, end parsing

    cmp cl, '0'  ; check if it's at least '0'
    jb end_parse ; if less, exit parsing (non-digit)
    cmp cl, '9'  ; check if it's at most '9'
    ja end_parse ; if more, exit parsing (non-digit)
    sub cl, '0' ; convert ASCII character to a number 
    ; multiply the current number in rax by 10 to shift the digits left
    ; and add the new digit from rcx to rax
    push rdx ; mul max it 0 
    mul r10 ; rax = rax * 10
    pop rdx
    add rax, rcx ; rax = rax + rcx (the new digit)

    inc rdx ; increment the length (number of valid digits parsed)
    inc rdi ; move to the next character in the string
    jmp parse_loop ; repeat the loop

end_parse:
    ret




; Принимает указатель на строку, пытается
; прочитать из её начала знаковое число.
; Если есть знак, пробелы между ним и числом не разрешены.
; Возвращает в rax: число, rdx : его длину в символах (включая знак, если он был) 
; rdx = 0 если число прочитать не удалось
parse_int:
    xor rax, rax ; clear rax to store the resulting number 
    xor rdx, rdx ; clear rdx to store the length 

    ; check for optional sign
    mov cl, [rdi] ; load the first character into cl
    cmp cl, '-' 
    je .negative_sign
    cmp cl, '+' 
    je .has_sign
    ; if not a sign, check if it's a digit
    jmp .check_digit

.negative_sign:
    ; set a flag for negative number
    mov r8, 1 ; indicates negative
.has_sign:
    mov r9, 1 ; for correct rdx at the end, because parse_uint changes it
    inc rdx ; increment length for the sign
    inc rdi ; move to the next character
    jmp .check_digit

.check_digit:
    push r8
    push r9
    sub rsp, 8
    call parse_uint
    add rsp, 8
    pop r9
    pop r8

.end_parse:
    ; if the number is negative, negate rax
    test r9, r9 ; check if the number had sign
    jz .return ; if not, just return
    inc rdx
    test r8, r8 ; check for sign 
    jz .return
    neg rax ; negate rax to get the negative number

.return:
    ret

; Принимает указатель на строку, указатель на буфер и длину буфера
; Копирует строку в буфер
; Возвращает длину строки если она умещается в буфер, иначе 0
;rdi is string pointer, rsi is buf pointer, rdx is length
string_copy:
    xor rax, rax
    xor r8, r8 ; r8 is going to put the characters in the buffer during the loop
.loop:
    cmp rax, rdx ; if the counter is bigger than the buf length
    jge .overflow ; then it's overflow

    mov r8b, byte [rdi] ; put the character in the register
    mov byte [rsi], r8b ; put the char in the buffer
    ;inc pointers
    inc rdi
    inc rsi
    inc rax ; inc counter

    cmp r8b, 0 ; check for null terminate
    jne .loop ; if it is, successfully return from the function

    ret 

.overflow:
    xor rax, rax ; not really neccesary here but i'll keep it
    ret
