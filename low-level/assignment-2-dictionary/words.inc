%include "colon.inc"

section .text

colon "first", first_value
db "some value that is from first key", 0

colon "i cant hide", second
db "what i feel about you", 0

colon "", blank
db "point blank huh?", 0

colon " ", space
db "SPACEmarine, got it?", 0

colon "ungabunga", five 
db "ganga banga", 0

colon "test", omg
db "test value", 0
