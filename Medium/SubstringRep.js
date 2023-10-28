// Given a string s, find the length of the longest substring without repeating characters.

// Example 1: Input: s = "abcabcbb"                                                      Output: 3 Explanation: The answer is "abc", with the length of 3.

// My Approach: Sliding Window
// 1. Create an object to store the characters and their count.
// 2. Create two pointers i and j.
// 3. Iterate through the string and check if the character is present in the object.
// 4. If not, add it to the object and increment i.
// 5. If yes, remove the character from the object and increment j.
// 6. Keep track of the length of the longest substring.
// 7. Return the length.

// Time Complexity: O(n)
// Space Complexity: O(n)

var lengthOfLongestSubstring = function(s) {
    let obj = {};
    let i = j = 0;
    let n = s.length;
    let length = 0;
    while (i < n && j < n) {
        if (!obj[s[i]]) {
            obj[s[i++]] = 1;
            length = Math.max(length, i - j);
        } else {
            obj[s[j++]] = 0;
        }
    }
    return length;
};