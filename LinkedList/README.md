## What is Linked List?

- A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
- The elements in a linked list are linked using pointers.
- In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

## Why Linked List?

Arrays can be used to store linear data of similar types, but arrays have the following limitations.

- The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
- Inserting a new element in an array of elements is expensive because the room has to be created for the new elements and to create room existing elements have to shift.
- For example, in a system, if we maintain a sorted list of IDs in an array id[].
  id[] = [1000, 1010, 1050, 2000, 2040].
  And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).
- Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved.

## How it works?

- Each node contains two items: the data and a reference to the next node.
- The last node has a reference to null. The entry point into a linked list is called the head of the list.
- It should be noted that head is not a separate node, but the reference to the first node. If the list is empty then the head is a null reference.
- A linked list is a self-referential datatype because it contains a pointer or link to another data of the same type.
- Linked lists permit insertion and removal of nodes at any point in the list in constant time, but do not allow random access. Linked lists can also be used to implement stacks and queues.

## Types of Linked List

There are three types of linked list.

### 1. Singly Linked List

In this type of linked list, every node stores address or reference of next node in list and the last node has next address or reference as NULL.

![Singly Linked List](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/612px-Singly-linked-list.svg.png)

### 2.Doubly Linked List

In this type of linked list, every node stores address or reference of previous node and next node in list.

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/915px-Doubly-linked-list.svg.png)

### 3.Circular Linked List

In this type of linked list, every node stores address or reference of next node and the last node has next address or reference of first node as NULL.

![Circular Linked List](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Circularly-linked-list.svg/610px-Circularly-linked-list.svg.png)

### Advantages

- O(1) time insertions and deletions in any position unlike arrays which require O(n) to do the same operation
- Can expand continuously, without having to specify their size ahead of time

### Disadvantages

- Accessing an element in the list is O(k) where k is the kth element from the head.
