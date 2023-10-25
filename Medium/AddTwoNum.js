// The Question is: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit.

/* My Approach: I use a root node to store the result. 
Then I traverse the two linked lists and add the values of the two nodes and the carry. 
If the sum is greater than 10, then we need to carry 1 to the next digit. 
If one of the linked lists is longer than the other, then we need to add the value of the longer linked list to the result. 
Finally, we need to check if the last digit has a carry. 
If it does, then we need to add a new node to the result. */

// Time Complexity: O(n)
// Space Complexity: O(n)

var addTwoNumbers = function(l1, l2) {
    var root = new ListNode(0);
    var current = root;
    var carry = 0;
    while (l1 !== null || l2 !== null) {
        var sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);
    }
    if (carry !== 0) {
        current.next = new ListNode(carry);
    }
    return root.next;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));