// With built-in methods:
// Creating an array
let myArray = [1, 2, 3, 4, 5];

// Accessing elements
console.log(myArray[2]); // Output: 3

// Updating an element
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// Inserting an element at the end
myArray.push(6);
console.log(myArray); // Output: [1, 10, 3, 4, 5, 6]

// Deleting an element at a specific index
let removedElement = myArray.splice(2, 1);
console.log(myArray); // Output: [1, 10, 4, 5, 6]
console.log("Removed Element:", removedElement); // Output: Removed Element: [3]

// Iterating over the array
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// Output:
// 1
// 10
// 4
// 5
// 6

// Without using any built-in methods:
// Creating an array
let myArray = [1, 2, 3, 4, 5];

// Accessing elements
function getElementAtIndex(arr, index) {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return "Index out of bounds";
  }
}

console.log(getElementAtIndex(myArray, 2)); // Output: 3

// Updating an element
function updateElementAtIndex(arr, index, newValue) {
  if (index >= 0 && index < arr.length) {
    arr[index] = newValue;
  } else {
    console.log("Index out of bounds");
  }
}

updateElementAtIndex(myArray, 1, 10);
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// Inserting an element at the end
function insertElementAtEnd(arr, value) {
  arr[arr.length] = value;
}

insertElementAtEnd(myArray, 6);
console.log(myArray); // Output: [1, 10, 3, 4, 5, 6]

// Deleting an element at a specific index
function deleteElementAtIndex(arr, index) {
  if (index >= 0 && index < arr.length) {
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
  } else {
    console.log("Index out of bounds");
  }
}

deleteElementAtIndex(myArray, 2);
console.log(myArray); // Output: [1, 10, 4, 5, 6]

// Iterating over the array
function iterateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

iterateArray(myArray);
// Output:
// 1
// 10
// 4
// 5
// 6
