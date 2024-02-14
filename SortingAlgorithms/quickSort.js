// Quick Sort Implementation Procedure
// 1. Choose a pivot element from the array.
// 2. Partition the array around the pivot, such that all elements smaller than the pivot are on the left and all elements greater than the pivot are on the right.
// 3. Recursively apply the above steps to the sub-arrays of elements.
// 4. Repeat until the entire array is sorted.

// Time Complexity: O(n log n)
// Space Complexity: O(log n)

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// Best Case: O(n log n) when the array is already sorted.
// Worst Case: O(n^2) when the array is sorted in reverse order.
// Average Case: O(n log n)
