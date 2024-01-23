// Pointers: A pointer is a variable whose value is the address of another variable.

// In JavaScript, a pointer is called a reference.
let a = 10;
let b = a;
console.log(a);
console.log(b);
// Here, the value of a is copied into b. So, b is not a pointer to a. It is a copy of a.

// In JavaScript, objects are passed by reference. So, a variable that is assigned an object is a pointer to that object.
let x = { name: "Harry", age: 18 };
let y = x;
console.log(x.name);
