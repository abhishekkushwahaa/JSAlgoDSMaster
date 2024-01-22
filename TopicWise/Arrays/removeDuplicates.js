// Problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Problem Statement: Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Example 1: Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// Solution Approach:
// 1. if array length is 0, return 0
// 2. initialize i = 0
// 3. loop through the array from index 1 to end
// 4. if nums[i] !== nums[j], increment i and set nums[i] = nums[j]
// 5. return i + 1

// Solution:
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
const removeDuply = removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5, 6]);
console.log(removeDuply); // Output: 7

// Time Complexity: O(n)
// Space Complexity: O(1)
