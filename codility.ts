function solution(A) {
  const unique = Array.from(new Set(A));
  const sorted = unique.sort((a, b) => a - b);

  const max = sorted[sorted.length - 1];
  const min = sorted[0];

  if (min > 1 || max < 1) {
    return 1;
  }

  const positives = new Set(sorted.filter((num) => num > 0));

  for (let i = 1; i <= positives.size; i++) {
    if (!positives.has(i)) {
      return i;
    }
  }

  return max + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
