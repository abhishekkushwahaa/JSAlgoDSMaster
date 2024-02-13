## What is Queue?

- Queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed.

- Mainly the following these basic operations are performed in the queue:

  - **Enqueue**: Adds an item in the queue. If the queue is full, then it is said to be an Overflow condition.
  - **Dequeue**: Removes an item from the queue. The items are dequeued in the same order in which they are enqueued. If the queue is empty, then it is said to be an Underflow condition.
  - **Front or Peek**: Returns front element of queue.
  - **isEmpty**: Returns true if queue is empty, else false.
  - **size**: Returns the size of the queue.
  - **print**: Prints the elements of the queue.
  - **clear**: Removes all the elements from the queue.
  - **search**: Searches for an element in the queue. If found, returns the 1-based index of the element from the front of the queue, else returns -1.
  - **toArray**: Returns an array representation of the queue.
  - **clone**: Returns a new queue with the same elements as the original queue.
  - **reverse**: Reverses the elements of the queue.

- Queue is a recursive data structure. Here is a structural representation of a Queue:
  ```
    Queue
    | 0 | | 1 | | 2 | | 3 | | 4 |
  ```
- Time Complexities of operations on queue:
- enqueue(), dequeue(), isEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.
- Applications of queue:
  - CPU scheduling
  - Disk Scheduling
  - Memory Management
  - Traffic Management
  - Web server request management
  - Print spooling
  - Task Scheduling
  - Breadth First Search (BFS) on graphs
  - Handling of interrupts in real-time systems
  - Call Center phone systems
  - Simulating a real-world queue, like a line of people waiting for a movie ticket, or a grocery store checkout line
  - Handling of data packets in networking
  - Handling of requests on a single shared resource, like a printer, CPU task scheduling, etc.
  - Handling of customers in banking systems, and much more.
