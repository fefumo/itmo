;1) Основная программа должна уменьшать на 2 содержимое X (ячейки памяти с адресом 0x4B) в цикле.
;2)Обработчик прерывания должен по нажатию кнопки готовности ВУ-3 осуществлять вывод 
;результата вычисления функции F(X)=-2X+5 на данное ВУ, a по нажатию кнопки
;готовности ВУ-2 выполнить операцию побитового 'ИЛИ-НЕ' содержимого РД данного
;ВУ и Х, результат записать в Х
;3)Если Х оказывается вне ОДЗ при выполнении любой операции по его изменению,
;то необходимо в Х записать максимальное по ОДЗ число.

org 0x0
v0: word $default, 0x180
v1: word $default, 0x180
v2: word $int2, 0x180
v3: word $int3, 0x180
v4: word $default, 0x180
v5: word $default, 0x180
v6: word $default, 0x180
v7: word $default, 0x180

org 0x10
max_odz: word 0x003A ; 58
min_odz: word 0x00c5 ;-59
default: iret

org 0x20
start:
    di
    cla
    ;запрет прерываний
    out 0x1
    out 0x3
    out 0xB
    out 0xD
    out 0x11
    out 0x15
    out 0x19
    out 0x1D

    ;разрешение прерываний для ву2 и ву3
    LD #0xA ;(1000 + 0010 = 1010 = A)
    out 0x5
    LD #0xB ;(1000 + 0011 = 1011 = B)
    out 0x7

;надо было как-то инциализировать начало. можно было просто cla
main:
    ei
    cla

;скорее всего неоптимизированно, ну да ладно, И ТАК СОЙДЕТ)))
declp:
    di ;чтобы не прерывалось во время исполнения вычитания и проверки на одз
    ld x
    sub #0x2
    call check
    st x
    nop ;для отладки. после первого цикла можно сразу вызывать прерывание
    ei
    jump declp

org 0x4b
x: word 0x004A ;максимальное одз = 58 в 10 СС

org 0x50
int3:
    hlt ;проверить AC
    st x
    asl
    neg
    add #0x5
    out 0x6
    hlt
    ld x 
    iret

int2:
    ;"побитовое или-не" это стрелка пирса !(A|B) = NOT (a OR b)
    ld x
    hlt ;проверить AC перед прерыванием
    in 0x4
    or $x
    not
    hlt
    call check
    st x
    iret

check:
    nop
    cmp min_odz
    blt write_max
    nop
    cmp max_odz
    bpl write_max
    nop
    ret

write_max:
    ld $max_odz
    st x
    ret