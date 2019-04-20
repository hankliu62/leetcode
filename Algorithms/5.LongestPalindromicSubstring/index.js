/**
 * 最长回文子串 https://leetcode-cn.com/problems/longest-palindromic-substring/ [中等]
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *  输入: "babad"
 *  输出: "bab"
 *  注意: "aba" 也是一个有效答案。
 *
 * 示例 2：
 *  输入: "cbbd"
 *  输出: "bb"
 */

/**
 * 解题思路:
 *  方法一：暴力法，
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var reversed = s.split('').reverse().join('');
  if (s === reversed) {
    return s;
  }

  var palindrome = '';
  for (var i = 0; i < s.length; i ++) {
    var j = s.length - 1;
    while(j > i) {
      var subStr = s.slice(i, j + 1);
      var reversedSubStr = reversed.slice(s.length - 1 - j, s.length - i);
      if (reversedSubStr === subStr) {
        if (palindrome.length < subStr.length) {
          palindrome = subStr;
          break;
        }
      }
      j --;
    }
  }
  return palindrome ? palindrome : s[0];
};