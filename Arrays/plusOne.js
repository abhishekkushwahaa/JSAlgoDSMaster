// Problem link: https://leetcode.com/problems/plus-one/

// Problem Statement:
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Therefore, the result should be [1,2,4].

// Solution Approach:
// 1. Start from the last element of the array and add 1 to it.
// 2. If the sum is less than 10, then return the array.
// 3. If the sum is 10, then make the current element 0 and move to the previous element.
// 4. Repeat the above steps until the first element of the array.
// 5. If the first element is also 10, then make it 0 and add 1 to the beginning of the array.

// Solution:
function plusOne(digits) {
  let i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0;
      i--;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
