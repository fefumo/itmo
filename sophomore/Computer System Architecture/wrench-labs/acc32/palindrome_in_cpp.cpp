#include <bits/stdc++.h>
using namespace std;

// Function to check if binary representation is a palindrome
bool isBinaryPalindrome(int x) {
    int rev = 0, temp = x;

    while (temp > 0) {
        rev = (rev << 1) | (temp & 1); // Append LSB to rev
        temp >>= 1; // Shift temp right
    }

    return x == rev; // Compare reversed with original
}

int main() {
    cout << (isBinaryPalindrome(5) ? "true" : "false") << endl; //FALSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //cout << (isBinaryPalindrome(10) ? "true" : "false") << endl;
    return 0;
}
