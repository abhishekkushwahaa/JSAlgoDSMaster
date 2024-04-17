// Implement an AVL tree with the following methods:
// insert: inserts a value into the tree
// remove: removes a value from the tree
// search: searches for a value in the tree

// Create a Node classs
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Create an AVLTree class
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  getHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to rotate right
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    return newRoot;
  }

  // Helper function to rotate left
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    return newRoot;
  }

  // Helper function to balance the tree
  balance(node) {
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    } else if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }
    return node;
  }

  // Helper function to insert a value into the tree
  insertHelper(node, value) {
    if (node === null) {
      return new Node(value);
    }
    if (value < node.data) {
      node.left = this.insertHelper(node.left, value);
    } else if (value > node.data) {
      node.right = this.insertHelper(node.right, value);
    }
    return this.balance(node);
  }

  // Insert a value into the tree
  insert(value) {
    this.root = this.insertHelper(this.root, value);
  }

  // Helper function to remove a value from the tree
  removeHelper(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.data) {
      node.left = this.removeHelper(node.left, value);
    } else if (value > node.data) {
      node.right = this.removeHelper(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      const temp = this.findMin(node.right);
      node.data = temp.data;
      node.right = this.removeHelper(node.right, temp.data);
    }
    return this.balance(node);
  }

  // Remove a value from the tree
  remove(value) {
    this.root = this.removeHelper(this.root, value);
  }

  // Helper function to find the minimum node
  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Helper function to search for a value in the tree
  searchHelper(node, value) {
    if (node === null) {
      return false;
    }
    if (node.data === value) {
      return true;
    }
    if (value < node.data) {
      return this.searchHelper(node.left, value);
    }
    return this.searchHelper(node.right, value);
  }

  // Search for a value in the tree
  search(value) {
    return this.searchHelper(this.root, value);
  }
}
