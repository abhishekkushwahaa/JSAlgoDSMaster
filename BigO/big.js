// Code Examples:
// O(1) - Constant Time
function addItem(n) {
  return n + n;
}
addItem(5); // O(1)

// O(log n) - Logarithmic Time
function binarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;
  let guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (arr[guess] === item) {
      return guess;
    } else {
      if (arr[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
}

// O(n) - Linear Time
function items(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
items(5);

function items(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i); // O(n)
  }
  for (let j = 0; j <= n; j++) {
    console.log(i); // O(n)
  }
}
items(5); // O(n + n) -> O(2n) -> O(n)
// Drop constants: O(2n) -> O(n)

// O(n^2) - Quadratic Time
function nestedItems(n) {
  for (let i = 0; i <= n; i++) {
    // O(n)
    for (let j = 0; j <= n; j++) {
      // O(n)
      console.log(i, j);
    }
  }
}
nestedItems(5); // O(n * n) -> O(n^2)
// Drop non-dominant terms: O(n^2 + n) -> O(n^2)

// O(n^3) - Cubic Time
function nestedItems(n) {
  for (let i = 0; i <= n; i++) {
    // O(n)
    for (let j = 0; j <= n; j++) {
      // O(n)
      for (let k = 0; k <= n; k++) {
        // O(n)
        console.log(i, j, k);
      }
    }
  }
}
nestedItems(5); // O(n * n * n) -> O(n^3)
// Drop non-dominant terms: O(n^3 + n^2) -> O(n^3)

// Big O Different Terms for Input:
function items(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i); // O(a)
  }
  for (let j = 0; j <= n; j++) {
    console.log(i); // O(b)
  }
}
items(5); // O(a + b)

// Big O Array Operations:
// Push: O(1)
// Pop: O(1)
// Shift: O(n)
// Unshift: O(n)
// Concat: O(n)
// Slice: O(n)
// Splice: O(n)
// Sort: O(n * log n)
// forEach/map/filter/reduce/etc.: O(n)

// Big O Object Operations:
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(1)

// Big O Object Methods:
// Object.keys: O(n)
// Object.values: O(n)
// Object.entries: O(n)
// hasOwnProperty: O(1)

// Big O String Operations:
// charAt: O(1)
// charCodeAt: O(1)
// concat: O(n)
// includes: O(n)
// indexOf: O(n)
// match: O(n)
// replace: O(n)
// slice: O(n)
// split: O(n)
// substr: O(n)
// toLowerCase: O(n)
// toUpperCase: O(n)
// trim: O(n)

// Big O Sorting algorithms:
// Bubble Sort: O(n^2)
// Selection Sort: O(n^2)
// Insertion Sort: O(n^2)
// Merge Sort: O(n * log n)
// Quick Sort: O(n * log n)
// Radix Sort: O(n * k)
// Heap Sort: O(n * log n)

// Big O Search algorithms:
// Linear Search: O(n)
// Binary Search: O(log n)
// Naive String Search: O(n * m)
// KMP String Search: O(n + m)

// Big Omega Sorting algorithms:
// Bubble Sort: Ω(n)
// Selection Sort: Ω(n^2)
// Insertion Sort: Ω(n)
// Merge Sort: Ω(n * log n)
// Quick Sort: Ω(n * log n)
// Radix Sort: Ω(n * k)
// Heap Sort: Ω(n * log n)

// Big Omega Search algorithms:
// Linear Search: Ω(1)
// Binary Search: Ω(1)
// Naive String Search: Ω(n * m)
// KMP String Search: Ω(n + m)

// Big Theta Sorting algorithms:
// Bubble Sort: Θ(n^2)
// Selection Sort: Θ(n^2)
// Insertion Sort: Θ(n^2)
// Merge Sort: Θ(n * log n)
// Quick Sort: Θ(n * log n)
// Radix Sort: Θ(n * k)
// Heap Sort: Θ(n * log n)

// Big Theta Search algorithms:
// Linear Search: Θ(n)
// Binary Search: Θ(log n)
// Naive String Search: Θ(n * m)
// KMP String Search: Θ(n + m)

// Big O Data Structures:
// Arrays: Insertion - It depends..., Removal - It depends..., Searching - O(n), Access - O(1)
// Push - O(1), Pop - O(1), Shift - O(n), Unshift - O(n), Concat - O(n), Slice - O(n), Splice - O(n), Sort - O(n * log n), forEach/map/filter/reduce/etc. - O(n)
// Objects: Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(1)
// Object.keys - O(n), Object.values - O(n), Object.entries - O(n), hasOwnProperty - O(1)
// Strings: charAt - O(1), charCodeAt - O(1), concat - O(n), includes - O(n), indexOf - O(n), match - O(n), replace - O(n), slice - O(n), split - O(n), substr - O(n), toLowerCase - O(n), toUpperCase - O(n), trim - O(n)

// Linked Lists: Insertion - O(1), Removal - It depends..., Searching - O(n), Access - O(n)
// Singly Linked Lists: Push - O(1), Pop - O(n), Shift - O(1), Unshift - O(1), Get - O(n), Set - O(n), Insert - O(n), Remove - O(n), Reverse - O(n)
// Doubly Linked Lists: Push - O(1), Pop - O(1), Shift - O(1), Unshift - O(1), Get - O(n), Set - O(n), Insert - O(n), Remove - O(n), Reverse - O(n)
// Stacks: Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(n)
// Queues: Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(n)
// Binary Search Trees: Insertion - O(log n), Removal - O(log n), Searching - O(log n), Access - O(log n)
// Tree Traversal: O(n)
// Graph Traversal: O(n + m)
// Graphs: Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(1)
// Hash Tables: Insertion - O(1), Removal - O(1), Searching - O(1), Access - O(1)

// Binary Heaps: Insertion - O(log n), Removal - O(log n), Searching - O(n), Access - O(n)
// Priority Queues: Insertion - O(log n), Removal - O(log n), Searching - O(n), Access - O(n)
// Tries: Insertion - O(length), Removal - O(length), Searching - O(length), Access - O(length)
// Splay Trees: Insertion - O(log n), Removal - O(log n), Searching - O(log n), Access - O(log n)

// B-Trees: Insertion - O(log n), Removal - O(log n), Searching - O(log n), Access - O(log n)
// Red-Black Trees: Insertion - O(log n), Removal - O(log n), Searching - O(log n), Access - O(log n)
// Suffix Trees: Insertion - O(n), Removal - O(n), Searching - O(n), Access - O(n)
// Suffix Arrays: Insertion - O(n), Removal - O(n), Searching - O(log n), Access - O(n)
// N-ary Trees: Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(n)
// Bloom Filters: Insertion - O(k), Removal - O(k), Searching - O(k), Access - O(k)
// Skip Lists: Insertion - O(log n), Removal - O(log n), Searching - O(log n), Access - O(log n)
// LRU Caches: Insertion - O(1), Removal - O(1), Searching - O(1), Access - O(1)

// Fibonacci Heaps: Insertion - O(1), Removal - O(log n), Searching - O(n), Access - O(n)
// AVL Trees: Insertion - O(log n), Removal - O(log n), Searching - O(log n), Access - O(log n)

// Dynamic Programming: O(n * m)
// Greedy Algorithms: O(n * log n)
// Divide and Conquer: O(n * log n)
// Backtracking: O(n!)
// Branch and Bound: O(n!)
// Brute Force: O(n!)
