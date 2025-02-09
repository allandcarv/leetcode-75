/**
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
 */

function decodeString(s: string): string {
  const stack: string[] = [];
  const numRegex = new RegExp(/[0-9]/);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === ']') {
      let content = '';

      for (let j = stack.length - 1; j >= 0; j--) {
        const char = stack.pop();
        if (char === '[') {
          let prevIdx = 1;
          let repetitions = '';

          while (numRegex.test(stack[j - prevIdx])) {
            repetitions = `${stack[j - prevIdx]}${repetitions}`;
            prevIdx += 1;
          }

          content = content.repeat(+repetitions);
          stack.push(...content);
          break;
        } else {
          content = `${char}${content}`;
        }
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join('').replaceAll(/[0-9]/g, '');
}

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('100[leetcode]'));
console.log(decodeString('2[20[bc]31[xy]]xd4[rt]'));
console.log(decodeString('2[ab3[cd]]4[xy]'));
