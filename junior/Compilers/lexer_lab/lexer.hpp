#include <cctype>
#include <string>
#include <vector>
#include <cstddef>

static inline bool isIdentStart(char c) {
  return std::isalpha(c) || c == '_'; // only char or '_'
}

static inline bool isIdentCont(char c) {
  return std::isalnum(c) || c == '_'; // alphanumeric
}

enum class TokenKind { Identifier, Number, Symbol, End };

struct Token {
  TokenKind kind;
  std::string lexeme; // the exact characters from the source
  int line;
  int col;
};

class Lexer {
public:
  explicit Lexer(std::string str);

  std::vector<Token> tokenize();

private:
  std::string src_; // initial string
  std::size_t pos_ = 0;
  int line_ = 1;
  int col_ = 1;

  bool isAtEnd() const;
  char peek() const;
  char advance();
};
