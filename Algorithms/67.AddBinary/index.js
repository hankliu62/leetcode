/**
 * 二进制求和 https://leetcode-cn.com/problems/add-binary/ [简单]
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。

 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var ANums = a.split('');
  var BNums = b.split('');

  var nums = [];
  var carry = 0;
  while(ANums.length || BNums.length) {
    var num = carry + parseInt(ANums.pop() || '0', 10) + parseInt(BNums.pop() || '0', 10);
    nums.push(num % 2);
    carry = Math.floor(num / 2);
  }

  if (carry) {
    nums.push(carry);
  }

  return nums.reverse().join('');
};