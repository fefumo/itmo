;Сливки: С-0xF3 л-0xСС и-0xС9 в-0xD7 к-0xCB и-0xC9 

ORG 0x3E9 ; начало программы
end_word: WORD 0x00 ; null 
str: WORD 0x59B ; ссылка на строку

START: CLA

s1: IN 0x3
    AND #0x40
    BEQ s1
    LD (str)
    SWAB
    OUT 0x2
    CMP end_word
    BEQ exit


s2: IN 0x3
    AND #0x40
    BEQ s2
    LD (str)+
    OUT 0x2
    CMP end_word
    BEQ exit
    JUMP s1

exit: HLT

ORG 0x59B
WORD 0xF3CC
WORD 0xC9D7
WORD 0xCBC9
WORD 0x0000