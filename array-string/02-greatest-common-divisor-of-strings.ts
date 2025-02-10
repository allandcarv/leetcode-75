/**
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
 */

function gcd(length1: number, length2: number): number {
  return length2 === 0 ? length1 : gcd(length2, length1 % length2);
}

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  return str1.substring(0, gcd(str1.length, str2.length));
}

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('LEET', 'CODE'));
console.log(gcdOfStrings('ABCDEF', 'ABC'));

/**
 * EUCLIDEAN ALGORITHM
 * https://en.wikipedia.org/wiki/Greatest_common_divisor
 */
