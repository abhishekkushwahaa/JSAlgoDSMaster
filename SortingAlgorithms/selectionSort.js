// Selection Sort Implementation Procedure
// 1. Start from the first element, find the smallest element in the array.
// 2. Swap the smallest element with the first element.
// 3. Move to the next element.
// 4. Repeat step 1.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // swap
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// Best Case: O(n^2) when the array is sorted.
// Worst Case: O(n^2) when the array is unsorted.
// Average Case: O(n^2)
