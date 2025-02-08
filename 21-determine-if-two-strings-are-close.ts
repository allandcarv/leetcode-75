function closeStrings(word1: string, word2: string): boolean {
  if (word1 === word2) {
    return true;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  const wordsLength = word1.length;
  const word1Map = new Map<string, number>();
  const word2Map = new Map<string, number>();

  for (let i = 0; i < wordsLength; i++) {
    word1Map.set(word1[i], (word1Map.get(word1[i]) ?? 0) + 1);
    word2Map.set(word2[i], (word2Map.get(word2[i]) ?? 0) + 1);
  }

  const hasEqualKeys = Array.from(word1Map.keys()).every((key) =>
    word2Map.has(key)
  );

  if (!hasEqualKeys) {
    return false;
  }

  const word1Frequencies = Array.from(word1Map.values()).sort((a, b) => a - b);
  const word2Frequencies = Array.from(word2Map.values()).sort((a, b) => a - b);

  return word1Frequencies.every(
    (freq, index) => freq === word2Frequencies[index]
  );
}

console.log(closeStrings('abc', 'bca'));
console.log(closeStrings('a', 'aa'));
console.log(closeStrings('cabbba', 'abbccc'));
