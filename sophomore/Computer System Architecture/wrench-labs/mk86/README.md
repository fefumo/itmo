Almost implemented this function (everything except checking for `int32` boundaries).


```py
def format_string(input):
    """Format string with %d placeholders replaced by integers from input.

    Input format: "format_string\\nint1\\nint2\\n..."
    Examples:
    - "Foo %d bar %d\\n232\\n43\\n" -> "Foo 232 bar 43"
    - "%5d\\n42\\n" -> "   42" (right-aligned, 5 digits)
    - "%-5d\\n42\\n" -> "42   " (left-aligned, 5 digits)
    - "Just text\\n" -> "Just text" (no formatting)

    Format string input buffer size limit: 0x20 bytes
    Output: unlimited size

    Integer handling: Only accepts 32-bit signed integers (-2147483648 to 2147483647).
    Returns -1 if any integer is outside this range.

    Returns formatted string or error codes:
    - -1 for invalid input format or format string exceeds 0x20 bytes
    """
    try:
        lines = input.split("\n")
        if len(lines) < 1:
            return [-1], input

        format_str = lines[0]

        # Check format string buffer size limit (0x20 bytes)
        if len(format_str) > 0x20:
            return [-1], input

        # Find all format specifiers: %d, %5d, %-5d, etc.
        format_specs = []
        i = 0
        while i < len(format_str):
            if format_str[i] == "%":
                spec_start = i
                i += 1
                if i < len(format_str) and format_str[i] == "-":
                    i += 1
                while i < len(format_str) and format_str[i].isdigit():
                    i += 1
                if i < len(format_str) and format_str[i] == "d":
                    format_specs.append(format_str[spec_start : i + 1])
                    i += 1
                else:
                    i = spec_start + 1
            else:
                i += 1
        placeholder_count = len(format_specs)

        # Check if we have enough lines for the placeholders
        if placeholder_count > 0 and len(lines) < placeholder_count + 1:
            return [-1], input

        # Parse integers from remaining lines
        integers = []
        line_idx = 1
        for _ in range(placeholder_count):
            if line_idx >= len(lines):
                return [-1], input
            try:
                parsed_int = int(lines[line_idx])
                # Check 32-bit boundary
                if parsed_int < -2147483648 or parsed_int > 2147483647:
                    remaining = "\n".join(lines[line_idx:])
                    return [-1], remaining
                integers.append(parsed_int)
                line_idx += 1
            except ValueError:
                # Calculate remaining input from the failed line
                remaining = "\n".join(lines[line_idx:])
                return [-1], remaining

        # Format the string
        try:
            if placeholder_count == 0:
                result = format_str
            else:
                result = format_str % tuple(integers)
        except (TypeError, ValueError):
            # Calculate remaining input
            remaining = "\n".join(lines[line_idx:]) if line_idx < len(lines) else ""
            return [-1], remaining

        # Calculate remaining input
        consumed_lines = line_idx
        if consumed_lines < len(lines):
            remaining = "\n".join(lines[consumed_lines:])
        else:
            remaining = ""

        return result, remaining

    except Exception:
        return [-1], input


assert format_string('Num: %d\n42\n') == ('Num: 42', '')
assert format_string('%5d\n42\n') == ('   42', '')
assert format_string('%-5d\n42\n') == ('42   ', '')
```
```
```
