/**
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the 
array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
 */

function maxOperations(nums: number[], k: number): number {
  const diffMap = new Map<number, number>();
  let operations = 0;

  for (const num of nums) {
    if (k > num) {
      const diff = k - num;

      const diffOccurrences = diffMap.get(diff);

      if (diffOccurrences) {
        operations += 1;
        diffMap.set(diff, diffOccurrences - 1);
      } else {
        diffMap.set(num, (diffMap.get(num) ?? 0) + 1);
      }
    }
  }

  return operations;
}

console.log(1, maxOperations([1, 2, 3, 4], 5));
console.log(2, maxOperations([3, 1, 3, 4, 3], 6));
console.log(
  3,
  maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
);
console.log(
  4,
  maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
);
