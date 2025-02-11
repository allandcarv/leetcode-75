/**
Given a binary array nums and an integer k, return the maximum number of consecutive 1's 
in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,*1,1,1,1,1,1*]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,*1,1,1,1,1,1,1,1,1,1*,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
 */

function longestOnes(nums: number[], k: number): number {
  let windowStart = 0;
  let windowEnd = 0;
  let zeros = 0;

  for (const num of nums) {
    if (num === 0) {
      zeros += 1;
    }

    if (zeros > k) {
      if (nums[windowStart] === 0) {
        zeros -= 1;
      }

      windowStart += 1;
    }

    windowEnd += 1;
  }

  return windowEnd - windowStart;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
