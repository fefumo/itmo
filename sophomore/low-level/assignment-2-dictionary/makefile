# Variables
ASM = nasm
ASMFLAGS = -f elf64 -g -F dwarf
LD = ld
LDFLAGS =
SRC = $(wildcard *.asm)
OBJ_DIR = obj
OBJ = $(patsubst %.asm,$(OBJ_DIR)/%.o,$(SRC))
TARGET = program
PYTHON = python3

# Rules
.PHONY: all clean test

all: $(TARGET)

# Create target executable
$(TARGET): $(OBJ)
	$(LD) $(LDFLAGS) -o $@ $^

# Compile .asm files to .o files in obj directory
$(OBJ_DIR)/%.o: %.asm lib.inc words.inc | $(OBJ_DIR)
	$(ASM) $(ASMFLAGS) -o $@ $<

# Ensure obj directory exists
$(OBJ_DIR):
	mkdir -p $(OBJ_DIR)

# Clean rule to remove object files and executable
clean:
	rm -rf $(OBJ_DIR) $(TARGET)

test: 
	$(PYTHON) test.py
