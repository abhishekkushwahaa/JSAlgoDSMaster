## Big O Notation

### Differences between Time and Space Complexity?

- Time Complexity: How much time does it take to run the code.
- Space Complexity: How much memory does it take to run the code.

### Different amongs Big O, Big Omega and Big Theta:

- Big O: Upper bound. The worst case scenario.
- Big Omega: Lower bound. The best case scenario.
- Big Theta: Average bound. The average case scenario.

### How to calculate Time Complexity?

1. Count the number of operations.
2. Remove the constants.
3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b).
4. Drop the non-dominant terms.

### How to calculate Space Complexity?

1. Most primitives (booleans, numbers, undefined, null) are constant space.
2. Strings require O(n) space (where n is the string length).
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

#### Examples

- O(1): Constant time complexity. The algorithm's running time does not depend on the input size.

- O(log n): Logarithmic time complexity. Common in algorithms with divide and conquer strategies, like binary search.

- O(n): Linear time complexity. The running time increases linearly with the input size.

- O(n log n): Linearithmic time complexity. Common in efficient sorting algorithms like mergesort and heapsort.

- O(n^2): Quadratic time complexity. Common in algorithms with nested iterations.

- O(2^n): Exponential time complexity. Common in algorithms that solve the traveling salesman problem.

- O(n!): Factorial time complexity. Common in brute-force algorithms that solve the traveling salesman problem.

### Order of Big O

O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)
