// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Problem Statement: You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

// Solution Approach: We can solve this problem using Kadane's Algorithm.
// What is Kadane's Algorithm? It is a Dynamic Programming approach to solve the maximum subarray problem.
// We can solve this problem using a single pass through the array.
// We can keep track of the minimum price and the maximum profit.
// We can iterate through the array and keep track of the minimum price and the maximum profit. We can calculate the profit by subtracting the current price with the minimum price.
// We can then update the maximum profit if the current profit is greater than the maximum profit.

// Solution:
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
}
