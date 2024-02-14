// What is Priority Queue?
// A priority queue is a type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

// Priority Queue Implementation

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Add element to the queue
  enqueue(element, priority) {
    let qElement = { element, priority };
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) this.items.push(qElement);
  }

  // Remove element from the queue
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  // Return the front element of the queue
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // Return the rear element of the queue
  rear() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the queue as a string
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + " ";
    return str;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }

  // Return the queue
  getQueue() {
    return this.items;
  }
}
