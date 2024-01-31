// Problem Link: https://leetcode.com/problems/zigzag-conversion/

// Problem Description:
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
// P.......A........H.......N
// ..A..P....L....S....I...I....G
// ....Y.........I........R
// And then read line by line: PAHNAPLSIIGYIR
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Solution Approach:
// Create a 2D array with numRows rows and s.length columns.
// Traverse the string and fill the array in zigzag pattern.
// Traverse the array and append the characters to the result string.

// Solution:
const convert = function (s, numRows) {
  if (numRows === 1) return s;
  let arr = [];
  let result = "";
  let row = 0;
  let col = 0;
  let isDown = true;

  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    arr[row][col] = s[i];
    if (isDown) {
      row++;
    } else {
      row--;
      col++;
    }
    if (row === numRows - 1) {
      isDown = false;
    } else if (row === 0) {
      isDown = true;
    }
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        result += arr[i][j];
      }
    }
  }

  return result;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
