// Implementation of Map in JavaScript

class Map {
  constructor() {
    this.items = {};
  }

  // Add a key-value pair to the map
  set(key, value) {
    this.items[key] = value;
  }

  // Remove a key-value pair from the map
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  // Check if the key is in the map
  has(key) {
    return this.items.hasOwnProperty(key);
  }

  // Get the value of the key
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  // Clear the map
  clear() {
    this.items = {};
  }

  // Return the size of the map
  size() {
    return Object.keys(this.items).length;
  }

  // Return the keys of the map
  keys() {
    return Object.keys(this.items);
  }

  // Return the values of the map
  values() {
    return Object.values(this.items);
  }

  // Return the key-value pairs of the map
  entries() {
    return Object.entries(this.items);
  }

  // Iterate through the map
  forEach(callback) {
    Object.keys(this.items).forEach((key) => {
      callback(key, this.items[key]);
    });
  }

  // Merge two maps
  merge(otherMap) {
    const mergedMap = new Map();
    this.forEach((key, value) => mergedMap.set(key, value));
    otherMap.forEach((key, value) => mergedMap.set(key, value));
    return mergedMap;
  }

  // Check if two maps are equal
  equals(otherMap) {
    if (this.size() !== otherMap.size()) {
      return false;
    }
    let isEqual = true;
    this.forEach((key, value) => {
      if (value !== otherMap.get(key)) {
        isEqual = false;
      }
    });
    return isEqual;
  }
}
