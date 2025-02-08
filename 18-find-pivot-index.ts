function pivotIndex(nums: number[]): number {
  let prefix: number[] = [];
  let postfix: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    prefix.push((prefix[i - 1] ?? 0) + nums[i]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    postfix[i] = (postfix[i + 1] ?? 0) + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if ((prefix[i - 1] ?? 0) === (postfix[i + 1] ?? 0)) {
      return i;
    }
  }

  return -1;
}

/**
 * function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = nums.reduce((res, cur) => res + cur, 0);
    for (let i = 0; i < nums.length; i++) {
        const n: number = nums[i];
        rightSum -= n;

        if (leftSum === rightSum) return i;

        leftSum += n;
    }

    return -1;
};
 */

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
