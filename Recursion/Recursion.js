// What is recursion?
// Recursion is a process (a function in our case) that calls itself.
// It's used to solve problems that can be broken down into smaller, repetitive problems.

// Why use recursion?
// It's a good alternative for loops. It's a good way to solve problems that have repeated subproblems.

// How does recursion work?
// A recursive function calls itself until it doesn't.

// The two main parts of a recursive function:
// 1. Base case: The condition when the recursion ends.
// 2. Recursive case: The condition that calls the function itself.

// Example of a recursive function 1:
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}
// Example usage:
console.log(factorial(5)); // Outputs 120

// Example of a recursive function 2:
function sumArray(arr, index = 0) {
  // Base case: if the array is empty, return 0
  if (index === arr.length) {
    return 0;
  } else {
    // Recursive case: add the current element to the sum of the rest of the array
    return arr[index] + sumArray(arr, index + 1);
  }
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Outputs 15
