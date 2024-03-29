// Problem Link: https://leetcode.com/problems/two-sum/

// Problem Statement: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1: Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Solution:
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
const sum = twoSum([2, 7, 11, 15], 9);
console.log(sum); // Output: [0, 1]

// Time Complexity: O(n^2)
// Space Complexity: O(1)
