// Linear Search Algorithm Implementation

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 1); // -1
