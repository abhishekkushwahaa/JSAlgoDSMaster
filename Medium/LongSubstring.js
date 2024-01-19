// Longest Palindromic Substring (medium)
// Given a string s, return the longest palindromic substring in s.

// Example 1: 
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Problem Link: https://leetcode.com/problems/longest-palindromic-substring/

// Solution Process:
// 1. Create a function that takes in a string
// 2. Create a variable that will hold the longest palindrome
// 3. Create a for loop that will iterate through the string
// 4. Create a for loop that will iterate through the string starting from the index of the first for loop
// 5. Create a variable that will hold the current substring
// 6. Create a variable that will hold the current substring reversed
// 7. Check if the current substring is equal to the current substring reversed
// 8. If it is, check if the current substring is longer than the longest palindrome
// 9. If it is, set the longest palindrome to the current substring
// 10. Return the longest palindrome

// Solution:
var longestPalindrome = function(s) {
    let longestPalindrome = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let currentSubstring = s.slice(i, j + 1);
            let currentSubstringReversed = currentSubstring.split("").reverse().join("");
            if (currentSubstring === currentSubstringReversed) {
                if (currentSubstring.length > longestPalindrome.length) {
                    longestPalindrome = currentSubstring;
                }
            }
        }
    }
    return longestPalindrome;

};

console.log(longestPalindrome("babad"));

// Time Complexity: O(n^3)

// Solution 2:
var longestPalindrome = function(s) {
    let longestPalindrome = "";
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                let currentSubstring = s.slice(left, right + 1);
                if (currentSubstring.length > longestPalindrome.length) {
                    longestPalindrome = currentSubstring;
                }
                left--;
                right++;
            } else {
                break;
            }
        }
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                let currentSubstring = s.slice(left, right + 1);
                if (currentSubstring.length > longestPalindrome.length) {
                    longestPalindrome = currentSubstring;
                }
                left--;
                right++;
            } else {
                break;
            }
        }
    }
    return longestPalindrome;

};

// Time Complexity: O(n^2)

// Solution Explanation:
// 1. Create a function that takes in a string
// 2. Create a variable that will hold the longest palindrome
// 3. Create a for loop that will iterate through the string
// 4. Create a variable that will hold the left pointer
// 5. Create a variable that will hold the right pointer
// 6. Create a while loop that will run while the left pointer is greater than or equal to 0 and the right pointer is less than the length of the string
// 7. Check if the character at the left pointer is equal to the character at the right pointer
// 8. If it is, create a variable that will hold the current substring
// 9. Check if the current substring is longer than the longest palindrome
// 10. If it is, set the longest palindrome to the current substring
// 11. Decrement the left pointer by 1 and increment the right pointer by 1
// 12. Else, break out of the while loop
// 13. Set the left pointer to the current index and the right pointer to the current index + 1
// 14. Create a while loop that will run while the left pointer is greater than or equal to 0 and the right pointer is less than the length of the string
// 15. Check if the character at the left pointer is equal to the character at the right pointer
// 16. If it is, create a variable that will hold the current substring
// 17. Check if the current substring is longer than the longest palindrome
// 18. If it is, set the longest palindrome to the current substring
// 19. Decrement the left pointer by 1 and increment the right pointer by 1
// 20. Else, break out of the while loop
// 21. Return the longest palindrome
