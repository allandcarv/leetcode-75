/**
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104
 */

function findMaxAverage(nums: number[], k: number): number {
  let windowEnd = 0;
  let windowStart = 0;

  let maxSum = Number.MIN_SAFE_INTEGER;
  let currSum = 0;

  for (const num of nums) {
    currSum += num;

    if (windowEnd - windowStart === k - 1) {
      maxSum = Math.max(maxSum, currSum);
      currSum -= nums[windowStart];
      windowStart += 1;
    }

    windowEnd += 1;
  }

  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
