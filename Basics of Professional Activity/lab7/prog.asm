;	ADDSPC X- Сложение SP c константой в коде команды, признаки не устанавливать
;	Код операции - 0FXX
;	Тестовая программа должна начинаться с адреса 0437

org 0x10
test1_res: word ?
; test2_res: word ?
; 7f + 7ff = 87e


org 0x437
;программа от преподавателя на проверку
start:
	CLA
	CLC
	CMC
	WORD 0x0F00
	ROL
	ST 0x20; 1
	INC
	PUSH ;7ff
	INC
	PUSH ;7fe
	WORD 0x0F01 
	ST 0x21 ;7ff
	PUSH ;7fd
	WORD 0x0FFF
	ST 0x22 ;7fc
	HLT
END
;	cla
;	add #0xff
;	add #0x1 ; set C flag
;	nop
;	push
;	nop
;	word 0x0f7f
;	hlt
;	ST $test1_res
;	hlt
;	word 0x0fff
;	nop
;END
