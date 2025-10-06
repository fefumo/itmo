CC = gcc
FO = -Wall -c -fPIC
FSO = -Wall -shared

all: libsolution.so

libsolution.so: solution.o
	$(CC) $(FSO) -o $@ $<

solution.o: solution.c
	$(CC) $(FO) -o $@ $<

.PHONY: clean
clean:
	rm -f solution.o libsolution.so
