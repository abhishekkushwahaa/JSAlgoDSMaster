// Probelm Link: https://www.leetcode.com/problems/reverse-string/

// Problem Statement: Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1: Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Solution Approach:
// Solution-1: Using built-in reverse() method
// Solution-2: Using for loop

// Solution-1: Using built-in reverse() method
function reverseString(s) {
  return s.reverse();
}
const reverseString1 = reverseString(["h", "e", "l", "l", "o"]);
console.log(reverseString1); // Output: ["o","l","l","e","h"]

// Solution-2: Using for loop
function reverseString2(s) {
  let result = [];
  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i]);
  }
  return result;
}
const reverseString3 = reverseString2(["h", "e", "l", "l", "o"]);
console.log(reverseString3); // Output: ["o","l","l","e","h"]

// Time Complexity: O(n)
// Space Complexity: O(n)
