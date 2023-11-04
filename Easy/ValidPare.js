//  Question is: https://leetcode.com/problems/valid-parentheses/ 

/*
    My Approach is:
    1. Create a stack
    2. Loop through the string
    3. If the current character is an opening bracket, push it to the stack
    4. If the current character is a closing bracket, pop the stack and compare the popped element with the current character
    5. If the popped element is not the corresponding opening bracket, return false
    6. If the stack is empty, return true
    7. Else return false
*/

// time complexity: O(n)

var isValid = function(s) {
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }else{
            let popped = stack.pop();
            if(s[i] === ')' && popped !== '('){
                return false;
            }else if(s[i] === '}' && popped !== '{'){
                return false;
            }else if(s[i] === ']' && popped !== '['){
                return false;
            }
        }
    }
    if(stack.length === 0){
        return true;
    }else{
        return false;
    }
};