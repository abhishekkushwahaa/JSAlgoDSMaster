// Problem link: https://www.interviewbit.com/problems/first-missing-integer/

// Problem statement: Given an unsorted integer array, find the first missing positive integer.

// Example:
// Input: [1, 2, 0]
// Output: 3

// Solution approach:
// 1. We will use the array itself to store the elements.
// 2. We will iterate through the array and for each element, we will try to put it at its correct position.
// 3. For example, if the element is 3, we will try to put it at index 2 (3-1).
// 4. We will keep swapping the elements until we reach an element that is already at its correct position.
// 5. After the above step, we will iterate through the array and find the first element that is not at its correct position.
// 6. The index of this element + 1 will be the first missing positive integer.

// Solution:
function firstMissingPositive(A) {
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] > 0 && A[i] <= n) {
      let pos = A[i] - 1;
      if (A[pos] !== A[i]) {
        [A[pos], A[i]] = [A[i], A[pos]];
        i--;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (A[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}

// Time complexity: O(n)
// Space complexity: O(1)
