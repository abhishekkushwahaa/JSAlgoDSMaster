## What is Stack?

- Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.
- Mainly the following these basic operations are performed in the stack:
  - **Push**: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
  - **Pop**: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
  - **Peek or Top**: Returns top element of stack.
  - **isEmpty**: Returns true if stack is empty, else false.
  - **size**: Returns the size of the stack.
  - **print**: Prints the elements of the stack.
  - **clear**: Removes all the elements from the stack.
  - **search**: Searches for an element in the stack. If found, returns the 1-based index of the element from the top of the stack, else returns -1.
  - **toArray**: Returns an array representation of the stack.
  - **fromArray**: Pushes the elements of an array into the stack.
  - **clone**: Returns a new stack with the same elements as the original stack.
- Stack is a recursive data structure. Here is a structural representation of a Stack:
  ```
    Stack
    -----
    | 0 |
    -----
    | 1 |
    -----
    | 2 |
    -----
    | 3 |
    -----
  ```
- Time Complexities of operations on stack:
- push(), pop(), isEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.
- Applications of stack:
  - Balancing of symbols
  - Infix to Postfix /Prefix conversion
  - Redo-undo features at many places like editors, photoshop.
  - Forward and backward feature in web browsers
  - Used in many algorithms like Tower of Hanoi, tree traversals, stock span problem, histogram problem.
  - Other applications can be Backtracking, Knight tour problem, rat in a maze, N queen problem and sudoku solver
  - In Graph Algorithms like Topological Sorting and Strongly Connected Components
  - Memory Management
  - Function Call and Return (including recursion)
  - Expression Evaluation
  - Parenthesis checking
  - String reversal
  - Maze problems
  - Tree traversals
