# Sets and Maps

## Sets

A Set is a collection of unique values. In a Set, the values are stored in such a way that they cannot be repeated. The values are stored in a sequence and can be iterated in the insertion order. The Set object lets you store unique values of any type, whether primitive values or object references.

### Set Methods

- `add(value)`: Adds a new element with the given value to the Set.
- `delete(value)`: Removes the element associated with the value from the Set.
- `has(value)`: Returns a boolean asserting whether an element is present with the given value in the Set or not.
- `clear()`: Removes all elements from the Set.
- `size`: Returns the number of elements in the Set.
- `values()`: Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
- `forEach(callbackFn, thisArg)`: Calls the callbackFn once for each value present in the Set, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
- `entries()`: Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. This is kept for compatibility with Map.
- `keys()`: Returns a new Iterator object that contains the values for each element in the Set object in insertion order. This is kept for compatibility with Map.
- `Symbol.iterator`: Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
- `Symbol.toStringTag`: A string value of the Object.prototype.toString() method that is used by the JavaScript engine to create the default string description of an object.
- `Symbol.toPrimitive`: A method that converts an object to a corresponding primitive value.
- `Symbol.match`: A regular expression method that matches the regular expression against a string.
- `Symbol.replace`: A regular expression method that replaces matched substrings of a string.
- `Symbol.search`: A regular expression method that returns the index within a string that matches the regular expression.
- `Symbol.split`: A regular expression method that splits a string at the indices that match the regular expression.
- `Symbol.hasInstance`: A method determining if a constructor object recognizes an object as its instance.
- `Symbol.isRegExp`: A method determining if an object may be used as a regular expression.

### Set Time Complexity

- `add`: O(1)
- `delete`: O(1)
- `has`: O(1)
- `clear`: O(1)
- `size`: O(1)
- `values`: O(n)
- `forEach`: O(n)
- `entries`: O(n)
- `keys`: O(n)
- `Symbol.iterator`: O(n)
- `Symbol.toStringTag`: O(1)
- `Symbol.toPrimitive`: O(1)
- `Symbol.match`: O(1)
- `Symbol.replace`: O(1)
- `Symbol.search`: O(1)
- `Symbol.split`: O(1)
- `Symbol.hasInstance`: O(1)
- `Symbol.isRegExp`: O(1)

### Set Use Cases

- Removing duplicate elements from an array.
- Checking if an element exists in a collection.
- Finding the union of two sets.
- Finding the intersection of two sets.
- Finding the difference of two sets.
- Finding the symmetric difference of two sets.
- Finding the subset of a set.
- Finding the superset of a set.

### Set Example

```javascript
let set = new Set();
set.add(1);
set.add(2);
console.log(set); // Set { 1, 2 }
console.log(set.has(1)); // true
console.log(set.size); // 2
set.delete(1);
console.log(set); // Set { 2 }
set.clear();
console.log(set); // Set {}
```

## Maps

A Map is a collection of elements where each element is stored as a pair of key and value. The key and value can be of any type. The keys in a Map are unique and the values can be repeated. The Map object holds key-value pairs and remembers the original insertion order of the keys.

### Map Methods

- `set(key, value)`: Sets the value for the key in the Map object. Returns the Map object.
- `get(key)`: Returns the value associated with the key, or undefined if there is none.
- `delete(key)`: Removes any value associated with the key and returns the value that Map.prototype.has(key) would have previously returned. Map.prototype.has(key) will return false afterwards.
- `has(key)`: Returns a boolean asserting whether a value has been associated with the key in the Map object or not.
- `clear()`: Removes all key-value pairs from the Map object.
- `size`: Returns the number of key-value pairs in the Map object.
- `keys()`: Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
- `values()`: Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
- `entries()`: Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
- `forEach(callbackFn, thisArg)`: Calls the callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

### Map Time Complexity

- `set`: O(1)
- `get`: O(1)
- `delete`: O(1)
- `has`: O(1)
- `clear`: O(1)
- `size`: O(1)
- `keys`: O(n)
- `values`: O(n)
- `entries`: O(n)
- `forEach`: O(n)

### Map Use Cases

- Storing key-value pairs.
- Storing data in a dictionary.
- Storing data in a hash table.

### Map Example

```javascript
let map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map); // Map { 'name' => 'John', 'age' => 30 }
console.log(map.get("name")); // John
console.log(map.size); // 2
map.delete("name");
console.log(map); // Map { 'age' => 30 }
map.clear();
console.log(map); // Map {}
```
