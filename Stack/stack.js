// Stack Implementation

class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the stack from the top
  push(element) {
    this.items.push(element);
  }

  // Remove element from the top of the stack
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  // Return the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // Return the stack as a string
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Return the stack
  getStack() {
    return this.items;
  }
}

Stack.push(10);
Stack.push(20);
Stack.push(30);
console.log(Stack.printStack());
console.log(Stack.pop());
console.log(Stack.printStack());
console.log(Stack.peek());
console.log(Stack.isEmpty());
console.log(Stack.size());
console.log(Stack.getStack());
Stack.clear();
console.log(Stack.printStack());
console.log(Stack.isEmpty());
console.log(Stack.size());
console.log(Stack.getStack());

// Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

// q1 - [4,2,3,5]
// q2 - []

MyStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(x);
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

var stack = new MyStack();
stack.push(3);
stack.push(5);
stack.push(96);
stack.push(24);
stack.pop();
console.log(stack.top());
