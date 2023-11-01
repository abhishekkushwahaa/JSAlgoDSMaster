//  Question is: https://leetcode.com/problems/longest-common-prefix/

/*
    My solution is: 
        - Find the shortest string in the array
        - Loop through the shortest string
        - Check if the current character is in all the strings
        - If it is, add it to the prefix
        - If it isn't, return the prefix
*/

// Time Complexity: O(n^2)

var longestCommonPrefix = function(strs) {
    let prefix = "";
    let shortest = "";
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }
    for (let i = 0; i < shortest.length; i++) {
        let char = shortest[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
longestCommonPrefix(["flower","flow","flight"]); // "fl"