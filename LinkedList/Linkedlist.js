// Constructor: LinkedList
// Properties: head, tail

// Methods: insert, remove, contains, print, size, getHead, getTail, getNthNode, getNthNodeFromEnd, reverse, reverseInGroup, reverseInGroupRecursive

// Node class construct with data and next
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class construct with head and tail
class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.next = this.head;
  }
}
