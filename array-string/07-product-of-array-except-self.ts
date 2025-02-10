function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = [];
  const postfix: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    prefix.push((prefix[i - 1] ?? 1) * nums[i]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    postfix[i] = (postfix[i + 1] ?? 1) * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result.push((prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1));
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
