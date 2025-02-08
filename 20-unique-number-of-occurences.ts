function uniqueOccurrences(arr: number[]): boolean {
  const occurrencesMap = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const occurrences = occurrencesMap.get(arr[i]) ?? 0;

    occurrencesMap.set(arr[i], occurrences + 1);
  }

  const setValues = new Set(occurrencesMap.values());

  return setValues.size === occurrencesMap.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
