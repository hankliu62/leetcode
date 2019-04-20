/**
 * 反转字符串 https://leetcode-cn.com/problems/reverse-string/ [简单]
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 *
 * 示例 1：
 *  输入：["h","e","l","l","o"]
 *  输出：["o","l","l","e","h"]
 *
 * 示例 2：
 *  输入：["H","a","n","n","a","h"]
 *  输出：["h","a","n","n","a","H"]
 */

/**
 * 解题思路；
 *  方法一：偷懒法，array.reverse();
 *  方法二：暴力法，i = 0,j = array.length - 1; i < j 时循环，置换位置
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var i = 0;
  var j = s.length - 1;
  while(i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

var reverseString2 = function(s) {
  s.reverse();
};