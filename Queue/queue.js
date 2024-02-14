// Queue Implementation

class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the queue
  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  // Return the front element of the queue
  front() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[0];
  }

  // Return the rear element of the queue
  rear() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the queue as a string
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
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

// Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.enqueue = function (x) {
  this.stack1.push(x);
};

// stack1 = [9,10]
// stack2 = []

MyQueue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};

MyQueue.prototype.front = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

[3, 6, 7];

const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.front());
