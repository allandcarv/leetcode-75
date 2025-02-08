function longestSubarray(nums: number[]): number {
  let head = 0;
  let tail = 0;
  let zeros = 0;
  let maxCount = -Infinity;

  while (tail < nums.length) {
    if (nums[tail] === 0) {
      zeros += 1;
    }

    while (zeros > 1) {
      if (nums[head] === 0) {
        zeros -= 1;
      }

      head += 1;
    }

    maxCount = Math.max(maxCount, tail - head);

    tail += 1;
  }

  return maxCount;
}

console.log('1', longestSubarray([1, 1, 0, 1]));
console.log('2', longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log('3', longestSubarray([1, 1, 1]));
