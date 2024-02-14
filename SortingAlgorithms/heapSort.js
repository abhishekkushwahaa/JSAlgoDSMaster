// Heap Sort Implementation Procedure
// 1. Build a max heap from the input data.
// 2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of the heap by 1.
// 3. Repeat step 2 until the entire array is sorted.

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function heapSort(arr) {
  let len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

// Best Case: O(n log n) when the array is already sorted.
// Worst Case: O(n log n) when the array is sorted in reverse order.
// Average Case: O(n log n)
