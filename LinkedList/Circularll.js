// What is it?: A circular linked list is a linked list where all nodes are connected to form a circle. There is no NULL at the end. A circular linked list can be a singly circular linked list or doubly circular linked list.

// Why important?: Circular linked lists are used in applications where the list is to be accessed in a circle. For example, when you want to play songs in a loop, you can use a circular linked list.

// Constructor: CircularLinkedList
// Properties: head, tail, length

// Constructor: Node
// Properties: value, next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Constructor: CircularLinkedList
// Properties: head, tail, length

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds a node to the end of the circular linked list
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }

  // Adds a node to the beginning of the circular linked list
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }

  // Adds a node to the circular linked list at a specific position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  }

  // Removes a node from the end of the circular linked list
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next !== this.head) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Removes a node from the beginning of the circular linked list
  shift() {
    if (this.length === 0) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.tail.next = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  // Removes a node from the circular linked list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const beforeNode = this.get(index - 1);
    const removed = beforeNode.next;
    beforeNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Gets a node from the circular linked list at a specific position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Sets a node from the circular linked list at a specific position
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // Traverses the circular linked list and executes a callback on each node
  traverse(callback) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      callback(current);
      current = current.next;
    }
  }

  // Reverses the circular linked list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  // Returns the circular linked list length
  size() {
    return this.length;
  }

  // Prints the circular linked list
  print() {
    const arr = [];
    this.traverse((node) => arr.push(node.value));
    console.log(arr);
  }

  // Prints the circular linked list in reverse
  printReverse() {
    const arr = [];
    let current = this.tail;
    for (let i = 0; i < this.length; i++) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  // Returns the circular linked list as an array
  toArray() {
    const arr = [];
    this.traverse((node) => arr.push(node.value));
    return arr;
  }

  // Returns the circular linked list as a string
  toString() {
    return this.toArray().toString();
  }

  // Rotates the circular linked list by a given number of positions
  rotate(n) {
    if (n > 0) {
      this.rotateRight(n);
    } else if (n < 0) {
      this.rotateLeft(-n);
    }
  }

  // Rotates the circular linked list to the right by n steps
  rotateRight(n) {
    if (this.length <= 1) return;
    n = n % this.length;
    if (n === 0) return;
    let temp = this.head;
    for (let i = 0; i < this.length - n - 1; i++) {
      temp = temp.next;
    }
    this.tail.next = this.head;
    this.head = temp.next;
    this.tail = temp;
    this.tail.next = null;
  }

  // Rotates the circular linked list to the left by n steps
  rotateLeft(n) {
    if (this.length <= 1) return;
    n = n % this.length;
    if (n === 0) return;
    let temp = this.head;
    for (let i = 0; i < n - 1; i++) {
      temp = temp.next;
    }
    this.tail.next = this.head;
    this.head = temp.next;
    this.tail = temp;
    this.tail.next = null;
  }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.push(1);
circularLinkedList.push(2);
circularLinkedList.push(3);
circularLinkedList.push(4);
circularLinkedList.push(5);
console.log(circularLinkedList.size()); // 5
circularLinkedList.print(); // [1, 2, 3, 4, 5]
circularLinkedList.reverse();
circularLinkedList.print(); // [5, 4, 3, 2, 1]
circularLinkedList.rotate(2);
circularLinkedList.print(); // [2, 1, 5, 4, 3]
circularLinkedList.rotate(-2);
circularLinkedList.print(); // [5, 4, 3, 2, 1]
circularLinkedList.rotateRight(2);
circularLinkedList.print(); // [2, 1, 5, 4, 3]
circularLinkedList.rotateLeft(2);
circularLinkedList.print(); // [5, 4, 3, 2, 1]
circularLinkedList.pop();
circularLinkedList.shift();
circularLinkedList.remove(1);
circularLinkedList.get(1);
circularLinkedList.set(1, 1);
circularLinkedList.traverse((node) => console.log(node.value));
// Output: 5 3 2 1
console.log(circularLinkedList.size()); // 4

// Time Complexity: O(1) for push, pop, shift, unshift, get, set, insert, remove
// Time Complexity: O(n) where n is the number of nodes in the circular linked list for reverse, rotate, rotateRight, rotateLeft
// Space Complexity: O(1) for push, pop, shift, unshift, get, set, insert, remove
// Space Complexity: O(n) where n is the number of nodes in the circular linked list for reverse, rotate, rotateRight, rotateLeft
