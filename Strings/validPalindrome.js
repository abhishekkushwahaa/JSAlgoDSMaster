// Problem link: https://leetcode.com/problems/valid-palindrome/

// Problem Statement: Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Solution Approach:
// 1. Create a new string with alphanumeric characters.
// 2. Reverse the string and compare it with the original string.
// 3. If both are equal, return true, else return false.

// Solution 1:
function validPalindrome(s) {
  let newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedString = newString.split("").reverse().join("");
  return newString === reversedString;
}
const isPalindrome = validPalindrome("aba");
console.log(isPalindrome); // true

// Time Complexity: O(n)
// Space Complexity: O(n)

// Solution 2:
function validPalindrome(s) {
  let newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = newString.length - 1;
  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
const isPalindrom = validPalindrome("aba");
console.log(isPalindrom); // true
