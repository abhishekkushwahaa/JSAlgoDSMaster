// Merge Sort Implementation Procedure
// 1. Divide the unsorted array into n subarrays, each containing 1 element.
// 2. Repeatedly merge subarrays to produce new sorted subarrays until there is only 1 subarray remaining.
// 3. Merge the subarrays to produce the final sorted array.

// Time Complexity: O(n log n)
// Space Complexity: O(n)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Best Case: O(n log n) when the array is already sorted.
// Worst Case: O(n log n) when the array is unsorted.
// Average Case: O(n log n)
