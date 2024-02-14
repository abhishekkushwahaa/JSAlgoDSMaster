// Hash Table implementation using Map

class HashTable {
  constructor() {
    this.table = new Map();
  }

  // Inserting a new key-value pair
  put(key, value) {
    this.table.set(key, value);
  }

  // Getting the value of a key
  get(key) {
    return this.table.get(key);
  }

  // updating the value of a key
  update(key, value) {
    this.table.set(key, value);
  }

  // Removing a key-value pair
  remove(key) {
    this.table.delete(key);
  }

  // Displaying the key-value pairs
  display() {
    for (let [key, value] of this.table) {
      console.log(key + " -> " + value);
    }
  }

  // Getting the size of the table
  size() {
    return this.table.size;
  }

  // Checking if the table is empty
  isEmpty() {
    return this.table.size === 0;
  }

  // Clearing the table
  clear() {
    this.table.clear();
  }

  // Rehashing the table
  rehash() {
    let oldTable = this.table;
    this.table = new Map();
    for (let [key, value] of oldTable) {
      this.put(key, value);
    }
  }

  // Checking if the table contains a key
  containsKey(key) {
    return this.table.has(key);
  }

  // Checking if the table contains a value
  containsValue(value) {
    for (let val of this.table) {
      if (val === value) {
        return true;
      }
    }
    return false;
  }

  // Getting all the keys
  keys() {
    let keys = [];
    for (let key of this.table.keys()) {
      keys.push(key);
    }
    return keys;
  }

  // Getting all the values
  values() {
    let values = [];
    for (let value of this.table.values()) {
      values.push(value);
    }
    return values;
  }

  // Getting the key-value pairs
  entries() {
    let entries = [];
    for (let [key, value] of this.table) {
      entries.push({ key, value });
    }
    return entries;
  }
}

// Example usage
let hashTable = new HashTable();
hashTable.put("John", 123);
hashTable.put("Doe", 456);
hashTable.put("Jane", 789);
hashTable.display();
console.log(hashTable.get("John"));
console.log(hashTable.size());
console.log(hashTable.isEmpty());
console.log(hashTable.containsKey("Doe"));
console.log(hashTable.containsValue(789));
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.entries());
hashTable.remove("Doe");
hashTable.display();
hashTable.clear();

// Implementing a hash table without using Map
class HashTable {
  constructor() {
    this.table = [];
  }

  // Simple hashing function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  // Inserting a new key-value pair
  put(key, value) {
    let position = this.hash(key);
    this.table[position] = value;
  }

  // Getting the value of a key
  get(key) {
    return this.table[this.hash(key)];
  }

  // Removing a key-value pair
  remove(key) {
    this.table[this.hash(key)] = undefined;
  }

  // Displaying the key-value pairs
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + " -> " + this.table[i]);
      }
    }
  }

  // Rehashing the table
  rehash() {
    let oldTable = this.table;
    this.table = [];
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i] !== undefined) {
        this.put(oldTable[i].key, oldTable[i].value);
      }
    }
  }
}
