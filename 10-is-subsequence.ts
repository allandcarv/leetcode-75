/**
 Given two strings s and t, return true if s is a subsequence of t, 
 or false otherwise.

A subsequence of a string is a new string that is formed from the 
original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 
Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 */

function isSubsequence(s: string, t: string): boolean {
  let sPtr = 0;
  let tPtr = 0;

  while (sPtr < s.length && tPtr < t.length) {
    if (s[sPtr] === t[tPtr]) {
      sPtr++;
    }

    tPtr++;
  }

  return sPtr === s.length;
}

console.log(1, isSubsequence('ace', 'abcde'));
console.log(2, isSubsequence('aec', 'abcde'));
console.log(3, isSubsequence('abc', 'ahbgdc'));
console.log(4, isSubsequence('axc', 'ahbgdc'));
