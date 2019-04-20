/**
 * 整数反转 https://leetcode-cn.com/problems/reverse-integer/ [简单]
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 *  输入: 123
 *  输出: 321
 *
 * 示例 2:
 *  输入: -123
 *  输出: -321
 *
 * 示例 3:
 *  输入: 120
 *  输出: 21
 *
 * 注意:
 *  假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
 *  请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

/**
 * 解题思路:
 *  未实现
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  }

  var nums = (x + '').split('');
  if (x < 0) {
    nums = nums.slice(1);
  }

  nums = nums.reverse().join('');
  nums = nums.replace(/^0+/, '');

  if (x < 0) {
    return -nums;
  }

  return +nums;
};
