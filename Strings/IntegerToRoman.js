// Problem Link: https://leetcode.com/problems/integer-to-roman/

// Problem Description:
// Given an integer, convert it to a roman numeral.

// Example 1:
// Input: num = 3
// Output: "III"

// Solution Approach:
// 1. Create a map of all the roman numerals and their respective integer values.
// 2. Loop through the map and keep dividing the number by the integer value of the roman numeral and keep adding the roman numeral to the result string.
// 3. Return the result string.

// Solution:
function intToRoman(num) {
  let romanMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);
  let result = "";
  for (let [key, value] of romanMap) {
    while (num >= key) {
      result += value;
      num -= key;
    }
  }
  return result;
}
console.log(intToRoman(3)); // Output: "III"

// Time Complexity: O(1)
