// Constructor: LinkedList
// Properties: head, tail
// head: first node of the linked list
// tail: last node of the linked list

// Basic structure of a linked list
/* 
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};
*/

// Construct Node class
// Properties: value, next
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Construct LinkedList class
// Properties: head, tail, length
class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
    this.length = 0;
  }

  // Add a new node to the linked list
  // Or You can use Add function to add a new node to the linked list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove the last node from the linked list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Remove the first node from the linked list
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Add a new node to the beginning of the linked list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Get the node at a specific position in the linked list
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

  // Set the value of a node at a specific position in the linked list
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // Insert a new node at a specific position in the linked list
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Remove a node at a specific position in the linked list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse the linked list
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

  // Print the linked list
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  // Traverse the linked list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Get the length of the linked list
  size() {
    return this.length;
  }

  // Get the first node of the linked list
  getFirst() {
    return this.head;
  }

  // Get the last node of the linked list
  getLast() {
    return this.tail;
  }

  // Clear the linked list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Check if the linked list contains a value
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Find the index of a value in the linked list
  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Find the last index of a value in the linked list
  lastIndexOf(value) {
    let current = this.head;
    let index = -1;
    let currentIndex = 0;
    while (current) {
      if (current.value === value) {
        index = currentIndex;
      }
      current = current.next;
      currentIndex++;
    }
    return index;
  }

  // Find the middle node of the linked list
  middle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // Find the nth node from the end of the linked list
  nthFromEnd(n) {
    let firstPointer = this.head;
    let secondPointer = this.head;
    for (let i = 0; i < n; i++) {
      firstPointer = firstPointer.next;
    }
    while (firstPointer) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
    return secondPointer;
  }

  // Remove duplicates from the linked list
  removeDuplicates() {
    let current = this.head;
    while (current) {
      let next = current.next;
      while (next) {
        if (next.value === current.value) {
          current.next = next.next;
        }
        next = next.next;
      }
      current = current.next;
    }
  }

  // Remove duplicates from the linked list using a hash table
  removeDuplicatesWithHashTable() {
    const hashTable = {};
    let current = this.head;
    let prev = null;
    while (current) {
      if (hashTable[current.value]) {
        prev.next = current.next;
      } else {
        hashTable[current.value] = true;
        prev = current;
      }
      current = current.next;
    }
  }

  // Find the kth node from the end of the linked list
  kthFromEnd(k) {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    if (k > length) return null;
    current = this.head;
    for (let i = 1; i < length - k + 1; i++) {
      current = current.next;
    }
    return current;
  }
}

// Bad way to add a new node to the linked list
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

const list = new LinkedList();
list.push(6);
list.push(10);
list.push(3);
list.pop();
console.log(list);

// Time complexity of linked list operations
// Access: O(n)
// Search: O(n)
// Insertion: O(1)
// Deletion: O(1)
// Space complexity: O(n)
// Where n is the number of nodes in the linked list
