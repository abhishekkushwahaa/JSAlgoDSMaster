// Insertion Sort Implementation Procedure
// 1. Start from the first element, consider it as sorted.
// 2. Pick the next element and insert it into the sorted array.
// 3. Repeat until the entire array is sorted.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// Best Case: O(n) when the array is already sorted.
// Worst Case: O(n^2) when the array is unsorted.
// Average Case: O(n^2)
