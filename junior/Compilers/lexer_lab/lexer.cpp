#include "lexer.hpp"

Lexer::Lexer(std::string str) : src_(std::move(str)) {}

bool Lexer::isAtEnd() const { return pos_ >= src_.size(); }

char Lexer::peek() const { return isAtEnd() ? '\0' : src_[pos_]; }

char Lexer::advance() {
  if (isAtEnd())
    return '\0';
  char c = src_[pos_++];
  if (c == '\n') {
    line_++;
    col_ = 1;
  } else {
    col_++;
  }
  return c;
}

std::vector<Token> Lexer::tokenize() {
  std::vector<Token> out;

  while (!isAtEnd()) {
    char c = peek();
    if (c == ' ' || c == '\t' || c == '\r' || c == '\n') {
      advance();
      continue;
    }
    std::size_t startPos = pos_;
    int startLine = line_;
    int startCol = col_;

    // Identifier
    if (isIdentStart(c)) {
      advance();
      while (!isAtEnd() && isIdentCont((unsigned char)peek())) {
        advance();
      }
      Token t;
      t.kind = TokenKind::Identifier;
      t.lexeme = src_.substr(startPos, pos_ - startPos);
      t.line = startLine;
      t.col = startCol;
      out.push_back(std::move(t));
      continue;
    }

    if (std::isdigit(c)) {

      while (!isAtEnd() && std::isdigit((unsigned char)peek())) {
        advance();
      }
      Token t;
      t.kind = TokenKind::Number;
      t.lexeme = src_.substr(startPos, pos_ - startPos);
      t.line = startLine;
      t.col = startCol;
      out.push_back(std::move(t));
      continue;
    }

    // Symbol (fallback for now)
    char ch = advance();
    Token t;
    t.kind = TokenKind::Symbol;
    t.lexeme = std::string{ch};
    t.line = startLine;
    t.col = startCol;
    out.push_back(std::move(t));
  }

  out.push_back(Token{TokenKind::End, "", line_, col_});
  return out;
}
