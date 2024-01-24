// Problem Link: https://www.leetcode.com/problems/valid-anagram/

// Problem Statement: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1: Input: s = "anagram", t = "nagaram"
// Output: true

// Solution Approach:
// 1. Check if the length of both strings are equal or not. If not, return false.
// 2. Create an empty object.
// 3. Loop through the first string and store the frequency of each character in the object.
// 4. Loop through the second string and check if the character is present in the object or not.
// 5. If not, return false.
// 6. If yes, decrement the frequency of that character in the object.
// 7. If the frequency of the character is 0, delete the property from the object.
// 8. Return true.

// Solutin:
function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  for (let j = 0; j < t.length; j++) {
    if (!obj[t[j]]) {
      return false;
    } else {
      obj[t[j]]--;
    }
  }
  return true;
}

const validAnagram1 = validAnagram("anagram", "nagaram");
console.log(validAnagram1); // Output: true

// Time Complexity: O(n)
// Space Complexity: O(1)

// Solution 2: using sort
function validAnagram2(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return s.split("").sort().join("") === t.split("").sort().join("");
}

const validAnagram3 = validAnagram2("anagram", "nagaram");
console.log(validAnagram3); // Output: true
