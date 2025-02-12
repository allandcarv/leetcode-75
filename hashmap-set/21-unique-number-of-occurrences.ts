/**
Given an array of integers arr, return true if the number of occurrences of each value in 
the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
 */

function uniqueOccurrences(arr: number[]): boolean {
  const occurrencesMap = new Map<number, number>();

  for (const num of arr) {
    const occurrences = occurrencesMap.get(num) ?? 0;
    occurrencesMap.set(num, occurrences + 1);
  }

  const occurrencesSet = new Set<number>(occurrencesMap.values());

  return occurrencesSet.size === occurrencesMap.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
