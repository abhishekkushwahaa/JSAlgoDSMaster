// Constructor: Class is a blueprint for creating objects with predefined properties and methods
// Constructor is a special method for creating and initializing an object created with a class
// Constructor method is called automatically when a new object is created
// Constructor method is used to initialize object properties
// Constructor method is executed with the "new" keyword

// Class Declaration: "class" keyword is used to declare a class
class Person {
  constructor(name, age) {
    // "this" keyword is used to refer to the current object
    this.name = name;
    this.age = age;
  }
  // Get method: To get the value of a property
  getName() {
    return this.name;
  }
  // Set method: To set the value of a property
  setName(name) {
    this.name = name;
  }
}

// Here "new" keyword is used to create an object of class Person
let p = new Person("Harry Potter", 18);
console.log(p.name);
console.log(p.getName());
p.setName("Ron Weasley");
console.log(p.getName());
