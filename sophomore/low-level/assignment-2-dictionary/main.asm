%include "lib.inc"
%include "dict.inc"
%include "words.inc"

%define BUF_SIZE 256

section .rodata
greetings: db "Hello, please enter the key: ", 0
err_not_found: db "Key was not found",0
err_overflow: db "Buffer overflow. The key can be no longer than 255 symbols.", 0

section .data
buf: times 256 db 0 

section .text
    global _start

_start:
    mov rdi, greetings
    call print_string

    mov rdi, buf
    mov rsi, BUF_SIZE
    push rdi
    push rsi
    call read_string ; rax has addr of the string or 0 otherwise
    pop rsi
    pop rdi ; points to the buffer that we wrote the string into
    test rax, rax
    jz .overflow

    mov rsi, list_end ; which is the last element for the first iteration since the list is going from last to first
    call find_word

    cmp rax, 0 ; if not found
    je .not_found

    add rax, 8 ; get the key
    mov rdi, rax ; put the addr of the key into rdi
    push rdi
    call string_length ; get its length, which will be in rax
    pop rdi

    add rdi, rax ; add the size of key to get the description (value) from the linked-list
    inc rdi ; we have to count null terminator that string_length didnt count

    call print_string ; print description (value)
    call print_newline
    mov rdi, 0
    call exit

    .overflow:
    mov rdi, err_overflow
    call print_error
    call print_newline
    mov rdi, 1
    call exit

    .not_found:
    mov rdi, err_not_found
    call print_error
    call print_newline
    mov rdi, 1
    call exit

