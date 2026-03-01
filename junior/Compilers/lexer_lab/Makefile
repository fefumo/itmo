CXX = g++
CXXFLAGS = -std=c++17 -O2 -Wall -Wextra -pedantic

app: main.o a.o
	$(CXX) $^ -o $@

main.o: main.cpp lexer.hpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

a.o: lexer.cpp lexer.hpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f *.o app
