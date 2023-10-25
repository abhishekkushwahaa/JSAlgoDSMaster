// This is the first easy question in LeetCode. Yes, it's very EASY.

// The question is: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// My Approach: I use a hash table to store the value and index of each element in the array. Then I traverse the array and check if the hash table contains the target minus the current element. If it does, then we found the answer. If not, we add the current element to the hash table.

// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        }
        hash[nums[i]] = i;
    }
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]