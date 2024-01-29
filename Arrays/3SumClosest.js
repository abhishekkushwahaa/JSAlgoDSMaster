// Problem Link: https://leetcode.com/problems/3sum-closest/

// Problem Description:
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
//  Return the sum of the three integers. You may assume that each input would have exactly one solution.

//  Example 1:
//  Input: nums = [-1,2,1,-4], target = 1
//  Output: 2
//  Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Solution Approach:
// 1. Sort the array
// 2. Iterate through the array and for each element, find the sum of the remaining two elements using two pointers
// 3. If the sum is greater than the target, decrement the right pointer. If the sum is less than the target, increment the left pointer
// 4. Keep track of the minimum difference between the sum and the target
// 5. Return the sum with the minimum difference

// Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(target - sum);
      if (diff < minDiff) {
        minDiff = diff;
        result = sum;
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
