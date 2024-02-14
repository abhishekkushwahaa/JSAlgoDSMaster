## What is Hashing and Hash Table?

- Hashing is a technique to convert a range of key values into a range of indexes of an array.
- Hash table is a data structure that is used to store keys/value pairs.
- We're going to use a hash function to map data to a location in the hash table.
- The hash function takes a key and returns an index in the hash table.
- The hash function should be deterministic, meaning that the same key should always produce the same hash.
- The hash function should be fast to compute.
- The hash function should uniformly distribute the keys across the hash table.
- The hash function should minimize collisions.
- A collision occurs when two keys hash to the same index in the hash table.
- We can use separate chaining or open addressing to handle collisions.
- Separate chaining uses linked lists to store multiple items at the same index.
- Open addressing uses a different location within the hash table to store the item that collided.

## Main Operations

- Insert: Add a new key/value pair to the hash table.
- Delete: Remove a key/value pair from the hash table.
- Search: Find a value based on a key in the hash table.
- Update: Change the value associated with a key in the hash table.
- Load Factor: The load factor is the ratio of the number of items in the hash table to the size of the hash table.
- Rehashing: When the load factor exceeds a certain threshold, we need to increase the size of the hash table and rehash all the items.
- Time Complexity:
  - The time complexity of insert, delete, search, and update operations is O(1) on average.
  - The time complexity of insert, delete, search, and update operations is O(n) in the worst case.
