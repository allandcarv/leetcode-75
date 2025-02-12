/**
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, a*b*cd*e* -> a*e*cd*b*

Operation 2: Transform every occurrence of one existing character into another existing character, 
and do the same with the other character.
For example, *aa*c*abb* -> *bb*c*baa* (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

 */

function closeStrings(word1: string, word2: string): boolean {
  if (word1 === word2) {
    return true;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  const word1Map = new Map<string, number>();
  const word2Map = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    word1Map.set(word1[i], (word1Map.get(word1[i]) ?? 0) + 1);
    word2Map.set(word2[i], (word2Map.get(word2[i]) ?? 0) + 1);
  }

  const hasSameLetters = [...word1Map.keys()].every((key) => word2Map.has(key));

  if (!hasSameLetters) {
    return false;
  }

  const word1Frequencies = [...word1Map.values()].sort(
    (freqA, freqB) => freqA - freqB
  );
  const word2Frequencies = [...word2Map.values()].sort(
    (freqA, freqB) => freqA - freqB
  );

  return word1Frequencies.every((freq, idx) => freq === word2Frequencies[idx]);
}

console.log(closeStrings('abc', 'bca'));
console.log(closeStrings('a', 'aa'));
console.log(closeStrings('cabbba', 'abbccc'));
