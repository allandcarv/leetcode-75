/**
Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

Follow up: Could you minimize the total number of operations done?
 */

/**
 Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums: number[]): void => {
  let ptr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[ptr] = nums[i];
      ptr += 1;
    }
  }

  nums.fill(0, ptr);
};

const nums1 = [0, 1, 0, 3, 12];
const nums2 = [0];
const nums3 = [1, 2, 3, 4, 5];

moveZeroes(nums1);
moveZeroes(nums2);
moveZeroes(nums3);

console.log(1, nums1);
console.log(2, nums2);
console.log(3, nums3);
