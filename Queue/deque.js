// What is Double Ended Queue (Deque)?
// A double-ended queue (deque) is an abstract data type that generalizes a queue, for which elements can be added to or removed from either the front (head) or back (tail).

// Deque Implementation

class Deque {
  constructor() {
    this.items = [];
  }

  // Add element to the front of the deque
  addFront(element) {
    this.items.unshift(element);
  }

  // Add element to the back of the deque
  addBack(element) {
    this.items.push(element);
  }

  // Remove element from the front of the deque
  removeFront() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  // Remove element from the back of the deque
  removeBack() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  // Return the front element of the deque
  front() {
    if (this.items.length === 0) return "No elements in Deque";
    return this.items[0];
  }

  // Return the rear element of the deque
  rear() {
    if (this.items.length === 0) return "No elements in Deque";
    return this.items[this.items.length - 1];
  }

  // Check if the deque is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the deque as a string
  printDeque() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }

  // Return the size of the deque
  size() {
    return this.items.length;
  }
}
