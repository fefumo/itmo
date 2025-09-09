; colon "<key>", <metka> 
; db "<value>", 0

%define list_end 0 ; base case
%macro colon 2
    %2: ; metka
    dq list_end ; pointer to the previous element
    db %1, 0 ; null terminate the first argument
    %define list_end %2 ; now it points to the last element
%endmacro
