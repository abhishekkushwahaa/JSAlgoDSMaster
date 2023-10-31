// Question: Roman to Integer (https://leetcode.com/problems/roman-to-integer/)

/*
    My Approach: 
        - Create a map of roman numerals to their integer values    
        - Loop through the string
        - If the current roman numeral is less than the next roman numeral, subtract the current roman numeral from the next roman numeral
        - Else, add the current roman numeral to the total
        - Return the total

*/

// Time Complexity: O(n)

var romanToInt = function(s) {
    const romanNum = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000
    }
    
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanNum[s[i]];
        let next = romanNum[s[i + 1]];
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
};
const RomanToNum = romanToInt('III');
console.log(RomanToNum);