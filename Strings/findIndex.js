// Problem link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// Problem Statement:
// Given a string and a character, find the index of the first occurrence of the character in the string.

// Example:
// Input: string = "Hello", character = "l"
// Output: 2

// Solution Approach:
// 1. Loop through the string and check if the substring is present in the string.
// 2. If present return the index.
// 3. If not present return -1.

// Solution:
function findFirstOccurrence(str, substring) {
  for (let i = 0; i <= str.length - substring.length; i++) {
    let match = true;
    for (let j = 0; j < substring.length; j++) {
      if (str[i + j] !== substring[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }
  return -1;
}

// Time Complexity: O(n*m)
// Space Complexity: O(1)
