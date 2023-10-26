// Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

// My Approach: 
// 1. Create a new array and add elements from both arrays in sorted order
// 2. Find the middle element of the new array
// 3. If the new array has odd number of elements, return the middle element
// 4. If the new array has even number of elements, return the average of the middle two elements

// Time Complexity: O(n+m)
// Space Complexity: O(n+m)

var findMedianSortedArrays = function(nums1, nums2) {
    let combined = []
    let i = 0
    let j = 0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            combined.push(nums1[i])
            i++
        } else{
            combined.push(nums2[j])
            j++
        }
    }
    while(i<nums1.length){
        combined.push(nums1[i])
        i++
    }
    while(j<nums2.length){
        combined.push(nums2[j])
        j++
    }
    let mid = Math.floor(combined.length/2)
    if(combined.length % 2 === 0){
        return (combined[mid-1] + combined[mid])/2
    }else {
        return combined[mid]
    }
};

findMedianSortedArrays([1,3],[2]) // 2