```
program     -> declaration* EOF ;
declaration -> "var" IDENT ( "=" expression )? ";" | statement ;

statement   -> whileStmt | ifStmt | printStmt | block | exprStmt ;
whileStmt   -> "while" "(" expression ")" statement ;
ifStmt      -> "if" "(" expression ")" statement ( "else" statement )? ;
printStmt   -> "print" expression ";" ;
block       -> "{" declaration* "}" ;
exprStmt    -> expression ";" ;

expression  -> assignment ;
assignment  -> IDENT "=" assignment | equality ;
equality    -> comparison ( ("==" | "!=") comparison )* ;
comparison  -> term ( ("<" | "<=" | ">" | ">=") term )* ;
term        -> factor ( ("+" | "-") factor )* ;
factor      -> unary ( ("*" | "/") unary )* ;
unary       -> ("-" | "!") unary | primary ;
primary     -> NUMBER | IDENT | "(" expression ")" ;
```
```
