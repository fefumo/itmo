```py 
def sum_word_pstream(n, *xs):
    """Input: stream of word (32 bit) in pascal string style (how many words,
    after that the words itself).

    Need to sum all numbers and send result in two words (64 bits).
    """
    tmp = 0
    for i in range(n):
        tmp += xs[i]
    hw, lw = ((tmp & 0xFFFF_FFFF_0000_0000) >> 32), tmp & 0x0000_0000_FFFF_FFFF
    return [hw, lw]


assert sum_word_pstream([2, 48, 18]) == [0, 66]
assert sum_word_pstream([1, 1]) == [0, 1]
assert sum_word_pstream([2, 48, 18, 0, 12]) == [0, 66]
assert sum_word_pstream([2, 48, 18, 12]) == [0, 66]
assert sum_word_pstream([2, 2147483647, 1, 0]) == [0, 2147483648]
assert sum_word_pstream([3, 2147483647, 1, 2147483647, 0]) == [0, 4294967295]
assert sum_word_pstream([4, 2147483647, 1, 2147483647, 1, 0]) == [1, 0]
assert sum_word_pstream([4, 2147483647, 1, 2147483647, 2, 0]) == [1, 1]
assert sum_word_pstream([2, 1, -1]) == [0, 0]
```
```
```
