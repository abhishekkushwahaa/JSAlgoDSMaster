// Problem Link: https://leetcode.com/problems/container-with-most-water/

// Problem Description:
//  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
//  n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
//  Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
//  Notice that you may not slant the container.

//  Example 1:
//  Input: height = [1,8,6,2,5,4,8,3,7]
//  Output: 49
//  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
//  In this case, the max area of water (blue section) the container can contain is 49.

// Solution Approach:
//  Two pointer approach
//  1. Start with the two pointers at the ends of the array
//  2. Calculate the area between the two pointers
//  3. Move the pointer with the smaller height inwards
//  4. Repeat steps 2 and 3 until the pointers meet

function mostWater(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
