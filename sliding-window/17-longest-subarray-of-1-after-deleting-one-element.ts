/**
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 
1's in the resulting array. Return 0 if there is no such subarray.

Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
 */

function longestSubarray(nums: number[]): number {
  let windowStart = 0;
  let windowEnd = 0;
  let maxOnes = -Infinity;
  let zeros = 0;

  for (const num of nums) {
    if (num === 0) {
      zeros += 1;
    }

    while (zeros > 1) {
      zeros -= nums[windowStart] === 0 ? 1 : 0;
      windowStart += 1;
    }

    maxOnes = Math.max(maxOnes, windowEnd - windowStart);

    windowEnd += 1;
  }

  return maxOnes;
}

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
