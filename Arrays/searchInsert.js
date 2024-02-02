// Problem Link: https://leetcode.com/problems/search-insert-position/

// Problem Statement:
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Solution Approach:
// 1. We can use binary search to solve this problem.
// 2. We will keep track of start and end index and calculate mid index.
// 3. If mid index value is equal to target, we return mid index.
// 4. If mid index value is less than target, we update start index to mid+1.
// 5. If mid index value is greater than target, we update end index to mid-1.
// 6. We return start index as answer.

// Solution:
function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

// Time Complexity: O(log(n))
// Space Complexity: O(1)
