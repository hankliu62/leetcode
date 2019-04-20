/**
 * 找不同 https://leetcode-cn.com/problems/find-the-difference/ [简单]
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 *
 * 示例:
 *  输入：
 *  s = "abcd"
 *  t = "abcde"
 *
 *  输出：
 *  e
 *
 * 解释：
 *  'e' 是那个被添加的字母。
 */

/**
 * 解题思路:
 *  方法一: 暴力法，先对字符串s进行分割，循环替换t中字符
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var chars = s.split('');
  for (var char of chars) {
    t = t.replace(char, '');
  }
  return t;
};