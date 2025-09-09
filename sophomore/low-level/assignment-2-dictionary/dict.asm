%include "lib.inc"

section .text
    global find_word

; rdi has the pointer to the string (key we are looking for)
; rsi has the pointer to the beginning of the dictionary (actually to the last element there)
find_word:
    mov r8, rsi ; r8 = pointer to the current dict elem

.loop:
    test r8, r8 ; check if its the end (zero pointer)
    je .not_found ; if it is 0, then not found

    lea r9, [r8 + 8] ; r9 = pointer to the value (skip 8 bytes because they are the previous element address)
    mov rsi, r9 ; for function call
    call string_equals

    test rax, rax
    jnz .found ; if strings are equal (rax = 1), then the key is found 

    mov r8, [r8] ; go to the next element from the pointer
    jmp .loop 

.found:
    mov rax, r8 ; return pointer to the found element
    ret

.not_found:
    xor rax, rax ; return 0 if not found
    ret
