// Bubble Sort Implementation Procedure
// 1. Start from the first element, compare the current element with the next element of the array.
// 2. If the current element is greater than the next element of the array, swap them.
// 3. If the current element is less than the next element, move to the next element.
// 4. Repeat step 1.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Best Case: O(n) when the array is already sorted.
// Worst Case: O(n^2) when the array is unsorted.
// Average Case: O(n^2)
