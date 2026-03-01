#include "lexer.hpp"
#include <iostream>

static const char *kindName(TokenKind k) {
  switch (k) {
  case TokenKind::Symbol:
    return "Symbol";
  case TokenKind::End:
    return "End";
  case TokenKind::Identifier:
    return "Identifier";
  case TokenKind::Number:
    return "Number";
  default:
    return "Other";
  }
}

void print_tokens(std::vector<Token> tokens) {
  for (const auto &t : tokens) {
    std::cout << t.line << ":" << t.col << " " << kindName(t.kind) << " ["
              << t.lexeme << "]\n";
  }
}

int main(int argc, char *argv[]) {
  std::string input = "foo_ + bar _x12\n = 7()\n !asd a_543211";
  Lexer lex(input);
  auto tokens = lex.tokenize();
  print_tokens(tokens);
}
