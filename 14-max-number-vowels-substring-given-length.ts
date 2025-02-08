/**
Given a string s and an integer k, return the maximum number 
of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
 */

function maxVowels(s: string, k: number): number {
  let windowStart = 0;
  let windowEnd = 0;
  let currVowelsCount = 0;
  let maxVowelsCount = -Infinity;
  const vowelRegex = new RegExp(/[aeiou]/, 'i');

  while (windowEnd < s.length) {
    const isVowel = vowelRegex.test(s[windowEnd]);

    currVowelsCount += isVowel ? 1 : 0;

    if (windowEnd - windowStart === k - 1) {
      const startsWithVowel = vowelRegex.test(s[windowStart]);

      maxVowelsCount = Math.max(maxVowelsCount, currVowelsCount);

      currVowelsCount -= startsWithVowel ? 1 : 0;

      windowStart += 1;
    }

    windowEnd += 1;
  }

  return maxVowelsCount;
}

console.log(1, maxVowels('abciiidef', 3));
console.log(2, maxVowels('aeiou', 2));
console.log(3, maxVowels('leetcode', 2));
