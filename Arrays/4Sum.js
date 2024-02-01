// Problem Link: https://leetcode.com/problems/4sum/

// Problem Statement:
// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that
// a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Input:
// nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Solution Approach:
// 1. Sort the array
// 2. Fix two pointers i and j
// 3. Fix two pointers l and r
// 4. Check if sum of all 4 pointers is equal to target
// 5. If yes, add to result
// 6. If sum is less than target, increment l
// 7. If sum is greater than target, decrement r
// 8. If l and r cross each other, increment i and j
// 9. Return result

// Solution:
const fourSum = (nums, target) => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i - 1] == nums[i]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j - 1] == nums[j]) continue;

      let l = j + 1;
      let r = nums.length - 1;

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] == nums[l + 1]) l++;
          while (l < r && nums[r] == nums[r - 1]) r--;
          l++;
          r--;
        } else if (sum < target) l++;
        else r--;
      }
    }
  }
  return result;
};
