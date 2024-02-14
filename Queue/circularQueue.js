// What is a Circular Queue?
// A circular queue is a type of queue in which the last position is connected to the first position to form a circle. It is also known as a Ring Buffer. The advantage of a circular queue is that we can use the spaces in front of the queue.

// Circle Queue Implementation

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }

  // Add element to the queue
  enqueue(element) {
    if ((this.rear + 1) % this.size === this.front) return "Queue is full";
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = element;
  }

  // Remove element from the queue
  dequeue() {
    if (this.front === -1) return "Queue is empty";
    let element = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return element;
  }

  // Return the front element of the queue
  front() {
    if (this.front === -1) return "Queue is empty";
    return this.items[this.front];
  }

  // Return the rear element of the queue
  rear() {
    if (this.rear === -1) return "Queue is empty";
    return this.items[this.rear];
  }

  // Return the queue as a string
  printQueue() {
    let str = "";
    for (let i = this.front; i <= this.rear; i++) str += this.items[i] + " ";
    return str;
  }

  // Return the size of the queue
  size() {
    if (this.front === -1) return 0;
    return (this.size - this.front + this.rear + 1) % this.size;
  }

  // Clear the queue
  clear() {
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }

  // Return the queue
  getQueue() {
    return this.items;
  }
}
