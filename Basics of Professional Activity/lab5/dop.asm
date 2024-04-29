;Ввод осуществляется с клавиатуры, вывод на текстовый принтер согласно следующему правилу
;Если это маленькая буква, то выводится большая
;Если заглавная, цифра или спец символ, то игнорируется, НО
;В память записываются ВСЕ введенные символы по правилу из задания (см выше)
;стоп-символ можно поменять


; ВУ-8(Клавиатура): #18 DR IN  #19 SR 
; ВУ-5(Принтер): #C DR OUT, #D SR
;61-7А english, C0-DF - russian

ORG 0x0B ; beginning
stop_word: WORD 0x7E ; тильда 
current_symbol: WORD ?
prev_symbol: WORD ?
min_english: WORD 0x61 ; минимальный символ для английского 
max_english: WORD 0x7B ; на один больше для правильного BLT
min_russian: WORD 0xC0 ; минимальный символ для русского
max_russian: WORD 0xE0
yo: WORD 0xA3 ;ё
X: WORD 0x40 ;для SR
pointer_to_written_symbols: WORD $Written_symbols
counter: WORD 0x0

START: CLA

main:
    CLA
    IN 0x19
    AND X
    BEQ main
    IN 0x18
    ST current_symbol
    LD counter
    ADD #0x1
    ST counter
    CMP #0x2
    BEQ load
    LD current_symbol
    SWAB
    ST prev_symbol
    SWAB
    LD current_symbol

main2:
    LD current_symbol
    CMP stop_word
    BEQ exit
    ;чисто для буквы ё отдельный принт. спасибо кодировке
    CMP yo
    BEQ yo_specific_print
    ;если текущий символ из диапазона маленьких букв, то вычитаем(добавляем для рус.) 0x20 и выводим. иначе - не выводим
    CMP min_english
    BGE english_greater_branch
    CMP min_russian
    BGE russian_greater_branch 
    JUMP main

load:
    LD counter
    SUB #0x2
    ST counter
    LD prev_symbol
    ADD current_symbol
    ST (pointer_to_written_symbols)+
    JUMP main2

english_greater_branch:
    CMP max_english
    BLT english_print
    BGE greater_than_max_eng_branch

greater_than_max_eng_branch:
    CMP min_russian
    BGE russian_greater_branch
    JUMP main2

russian_greater_branch:
    CMP max_russian
    BLT russian_print
    JUMP main2

english_print:
    IN 0xD
    AND X
    BEQ english_print
    LD current_symbol
    SUB #0x20
    OUT 0xC
    JUMP main

russian_print:
    IN 0xD
    AND X
    BEQ russian_print
    LD current_symbol
    ADD #0x20
    OUT 0xC
    JUMP main

yo_specific_print:
    IN 0xD
    AND X
    BEQ yo_specific_print
    LD current_symbol
    ADD #0x10
    OUT 0xC
    JUMP main

exit:
    HLT

Written_symbols: WORD ?