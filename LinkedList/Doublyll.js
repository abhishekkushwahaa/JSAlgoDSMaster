// What is it: A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.

// Why important: Doubly linked list is a more sophisticated form of linked list. It has two pointers, one to the next node and another to the previous node. This allows for more flexibility in the operations that can be performed on the list.

// Constructor: Node
// Properties: value, next, prev
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Constructor: DoublyLinkedList
// Properties: head, tail, length
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds a node to the end of the doubly linked list
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Adds a node to the beginning of the doubly linked list
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Adds a node to the doubly linked list at a specific position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // Removes a node from the end of the doubly linked list
  pop() {
    if (this.length === 0) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  // Removes a node from the beginning of the doubly linked list
  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  // Removes a node from the doubly linked list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  // Retrieves a node by its position in the doubly linked list
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode;
    if (index < this.length / 2) {
      let counter = 0;
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  // Traverses the doubly linked list and executes a callback on each node
  traverse(callback) {
    let currentNode = this.head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  // Updates the value of a node in the doubly linked list
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // Reverses the doubly linked list
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    for (let i = 0; i < this.length; i++) {
      const prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;
      currentNode = currentNode.prev;
    }
    return this;
  }

  // Prints the values of the doubly linked list
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  // Prints the values of the doubly linked list in reverse
  printReverse() {
    const arr = [];
    let currentNode = this.tail;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    console.log(arr);
  }

  // Returns the length of the doubly linked list
  size() {
    return this.length;
  }

  // Returns the doubly linked list as an array
  toArray() {
    const arr = [];
    this.traverse((node) => arr.push(node.value));
    return arr;
  }

  // Returns the doubly linked list as a string
  toString() {
    return this.toArray().join(" ");
  }

  // Rotates the doubly linked list by a given number of positions
  rotate(num) {
    const index =
      num >= 0 ? num % this.length : this.length + (num % this.length);
    const lastNode = this.get(this.length - 1);
    const newLastNode = this.get(this.length - 1 - index);
    const newHead = newLastNode.next;

    lastNode.next = this.head;
    this.head.prev = lastNode;
    newLastNode.next = null;
    this.head = newHead;
    newHead.prev = null;
    this.tail = newLastNode;
  }

  // Rotates the doubly linked list to the right by n steps
  rotateRight(n) {
    if (this.length <= 1) return;
    n = n % this.length;
    if (n === 0) return;
    this.reverse();
    this.reverseSublist(0, n - 1);
    this.reverseSublist(n, this.length - 1);
  }

  // Rotates the doubly linked list to the left by n steps
  rotateLeft(n) {
    if (this.length <= 1) return;
    n = n % this.length;
    if (n === 0) return;
    this.reverseSublist(0, n - 1);
    this.reverseSublist(n, this.length - 1);
    this.reverse();
  }
}

// Example usage:
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
doublyLinkedList.push(8);
doublyLinkedList.push(9);
doublyLinkedList.push(10);
doublyLinkedList.unshift(0);
doublyLinkedList.insert(5, 5);
doublyLinkedList.pop();
doublyLinkedList.shift();
doublyLinkedList.remove(5);
doublyLinkedList.get(5);
doublyLinkedList.set(5, 5);
doublyLinkedList.traverse((node) => console.log(node.value));
// Output: 0 1 2 3 4 5 7 8 9 5

// Time Complexity: O(1) for push, pop, shift, unshift, get, set, insert, remove
// Space Complexity: O(n) where n is the number of nodes in the doubly linked list
