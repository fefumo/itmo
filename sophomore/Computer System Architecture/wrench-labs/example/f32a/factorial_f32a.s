    .data

input_addr:      .word  0x80
output_addr:     .word  0x84

    .text

    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

_start:
    \ @p dataStack.push(mem[<input_addr>])
    \ a! a->dataStack.pop() 
    \ @ dataStack.push(mem[a])



    @p input_addr 
    a!
    @
    \ <at some address> input_addr = 0x80; mem[<input_addr>] = some address of `input_addr` variable
    \ a! a->dataStack.pop(0x80) \\ a = 0x80
    \ @ dataStack.push(mem[a]) \\ dataStack.top() = mem[a]; top = mem[0x80] = 4 --- input

    factorial

    @p output_addr a! !
    halt

    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

multiply:
    lit 31 >r                \ for R = 31
    \ lit <value>; dataStack.push(31); T = 31
    \ >r returnStack.push(dataStack.pop());
    \ R = 31, T = 0, S = 1

multiply_do:
\ First iteration:
\ Before: T = 0 A = 4 S = 1  
\ 1) A[0] == 0 => T -> T + 0; T = 0
\ 2) A -> A >> 1; before: 0100 after 0010; A = 2
\ 3) T[0] == 0 => A[31] -> 0; A = 2
\ 4) T -> T >> 1; T = 0;
\ Result after 1st iteration: T  = 0, A = 2, S = 1
    +*                       \ mres-high:acc-old:n:[]; mres-low in a

    \ if R != 0 then R <- R - 1; p <- <label>
    \ ;decrement resultStack and goto multiply_do
    next multiply_do
    drop drop a              \ mres-low:n:[] => acc:n:[]
    ;


\#### 2 iteration:
\ A-> A>>1; before: 0010 after: 0001
\ Result: T = 0 A = 2 S = 1
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\### 3 iteration:
\ A-> A>>1; before:0001 after: 0x80000000
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\ until R != 0 (31 times in total)
\ Result: T = 0 A = 4 S = 1
\ then
\ drop <dataStack.pop()> x2; T =4 A = 4 S = 0  
\ dataStack.push(a) T = 4
\ return <p <- returnStack.pop()>

    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

factorial:
\ First iteration:
    \ dataStack.push(1); dataStack = 1
    lit 1 
    \ swap T, S
    over               
    \ T = 4, S = 1, A = 0x80
factorial_while:
    \ T = 4, S = 4
    dup                     
    \ if dataStack.pop() == T == 0: goto factorial_finish
    if factorial_finish      
    \ T = 4, S = 1

    \ T = 4, S = 4
    dup
    \ a -> 4 (dataStack.pop())
    a!                   
    \ T = 4. S = 1

    \T = 1, S = 4
    over   
    \T = 0                 
    lit 0                    

    \call multiply: returnStack.push(p); p <- <label>
    multiply

    \T = 4 S = 4
    over
    \T =-1 (0xffffffff)
    \T = -1 + 4 = 3                     
    lit -1 +                
        
    factorial_while ;

factorial_finish:
    drop                     
    ;