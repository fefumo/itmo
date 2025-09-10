#include <algorithm>
#include <cctype>
#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

struct PairIndices {
    size_t upper_idx;  // Input index of the uppercase letter in the pair
    size_t lower_idx;  // Input index of the lowercase letter in the pair
};

struct StackEntry {
    char letter;
    size_t index;
};

int main() {
    std::string inp;
    std::cin >> inp;

    // Precompute the lower order mapping: for each lowercase letter in the input,
    // assign its order (starting from 1) among all lowercase letters.
    std::vector<int> lowerOrder(inp.size(), 0);
    int lowerCount = 1;
    for (size_t i = 0; i < inp.size(); i++) {
        if (std::islower(inp[i])) {
            lowerOrder[i] = lowerCount;
            lowerCount++;
        }
    }

    std::vector<StackEntry> stack;
    std::vector<PairIndices> pairs;

    // Process the input to match pairs.
    // We follow the idea that a valid pair is formed between an uppercase and its corresponding lowercase letter.
    // Depending on which letter appears as the opener, the matching is done in one of two branches.
    for (size_t i = 0; i < inp.size(); i++) {
        char symbol = inp[i];
        if (std::isupper(symbol)) {
            // For an uppercase letter, check if a lowercase letter (its match) is on top of the stack.
            if (!stack.empty() && std::islower(stack.back().letter) &&
                stack.back().letter == std::tolower(symbol)) {
                // Here the lowercase letter (on the stack) is the opener.
                // The current uppercase letter is closing the pair.
                PairIndices pr;
                pr.upper_idx = i;               // Uppercase letter is current.
                pr.lower_idx = stack.back().index; // Matching lowercase letter from the stack.
                pairs.push_back(pr);
                stack.pop_back();
            } else {
                // Otherwise, push the uppercase letter as a potential opener.
                stack.push_back({symbol, i});
            }
        } else { // symbol is lowercase
            // For a lowercase letter, check if an uppercase letter (its match) is on top of the stack.
            if (!stack.empty() && std::isupper(stack.back().letter) &&
                stack.back().letter == std::toupper(symbol)) {
                // Here the uppercase letter (on the stack) is the opener.
                // The current lowercase letter closes the pair.
                PairIndices pr;
                pr.upper_idx = stack.back().index; // Uppercase letter from the stack.
                pr.lower_idx = i;                  // Lowercase letter is current.
                pairs.push_back(pr);
                stack.pop_back();
            } else {
                // Otherwise, push the lowercase letter as a potential opener.
                stack.push_back({symbol, i});
            }
        }
    }

    // If there are unmatched letters, the expression is invalid.
    if (!stack.empty()) {
        std::cout << "Impossible\n";
        return 0;
    }

    std::cout << "Possible\n";

    // Sort the pairs by the uppercase letter's input index, which gives the order
    // in which uppercase letters appear in the input.
    std::sort(pairs.begin(), pairs.end(), [](const PairIndices& a, const PairIndices& b) {
        return a.upper_idx < b.upper_idx;
    });

    // For each pair (in the order of uppercase appearance), output the corresponding
    // lowercase letter's order (i.e. its 1-based position among lowercase letters).
    for (const auto& p : pairs) {
        std::cout << lowerOrder[p.lower_idx] << " ";
    }
    std::cout << "\n";

    return 0;
}
