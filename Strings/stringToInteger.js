// Problem Link: https://leetcode.com/problems/string-to-integer-atoi/

// Problem Description:
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:
// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.

// Note:
// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
// Step 2: "   -42" ('-' is read, so the result should be negative)
// Step 3: "   -42" ("42" is read in)
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.

// Solution Approach:
// 1. Trim the string to remove leading and trailing whitespaces
// 2. Check if first character is + or - and set the sign accordingly
// 3. Iterate through the string and check if the character is a digit or not
// 4. If it is a digit, then add it to the result
// 5. If it is not a digit, then break the loop
// 6. If the result is greater than 32 bit signed integer, then return the max or min value accordingly
// 7. Return the result

// Solution:
function myAtoi(s) {
  let oput = "";
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) != NaN) {
      oput += s[i];
    }
  }
  let res = parseInt(oput) ? parseInt(oput) : 0;

  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (res < -1 * Math.pow(2, 31)) {
    return -1 * Math.pow(2, 31);
  } else {
    return res;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
