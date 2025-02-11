/**
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

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
  const vowelsRegex = new RegExp(/[aeiou]/, 'i');
  let windowStart = 0;
  let windowEnd = 0;

  let maxVowelsCount = Number.MIN_SAFE_INTEGER;
  let currVowelsCount = 0;

  for (const char of s) {
    if (vowelsRegex.test(char)) {
      currVowelsCount += 1;
    }

    if (windowEnd - windowStart === k - 1) {
      maxVowelsCount = Math.max(maxVowelsCount, currVowelsCount);
      currVowelsCount -= vowelsRegex.test(s[windowStart]) ? 1 : 0;
      windowStart += 1;
    }

    windowEnd += 1;
  }

  return maxVowelsCount;
}

console.log(maxVowels('abciiidef', 3));
console.log(maxVowels('aeiou', 2));
console.log(maxVowels('leetcode', 3));
