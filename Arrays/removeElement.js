// Problem link: https://leetcode.com/problems/remove-element/

// Problem Statement: Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Example 1: Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]

// Solution Approach:
// 1. if array length is 0, return 0
// 2. initialize i = 0
// 3. loop through the array from index 0 to end
// 4. if nums[j] !== val, set nums[i] = nums[j] and increment i
// 5. return i

function removeElement(nums, val) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
let rElement = removeElement([3, 2, 2, 3, 5, 7], 3);
console.log(rElement); // Output: 2

// Time Complexity: O(n)
// Space Complexity: O(1)
