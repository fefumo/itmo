def is_binary_palindrome(n):
    """Check if the 32-bit binary representation of a number is a palindrome.

    Args:
        n (int): The integer to check.

    Returns:
        int: 1 if the binary representation is a palindrome, otherwise 0.
    """
    binary_str = f"{n:032b}"  # Convert to 32-bit binary string
    res = binary_str == binary_str[::-1]
    return 1 if res else 0

#print(f"{5:32b}")
assert is_binary_palindrome(5) == 0
#print(f"{15:32b}")
assert is_binary_palindrome(15) == 0
assert is_binary_palindrome(4026531855) == 1
#print(f"0b{3221225474:032b}")
assert is_binary_palindrome(3221225474) == 0
assert is_binary_palindrome(11) == 0
assert is_binary_palindrome(2147483649) == 1
#maximum32 = 2**32 - 1
#print(maximum32 - 4026531855)
#print(4026531855 > maximum32)