function longestOnes(nums: number[], k: number): number {
  let head = 0;
  let tail = 0;
  let zeros = 0;

  while (tail < nums.length) {
    if (nums[tail] === 0) {
      zeros += 1;
    }

    if (zeros > k) {
      if (nums[head] === 0) {
        zeros -= 1;
      }

      head += 1;
    }

    tail += 1;
  }

  return tail - head;
}

console.log(1, longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  2,
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
console.log(
  3,
  longestOnes(
    [
      0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    3
  )
);
