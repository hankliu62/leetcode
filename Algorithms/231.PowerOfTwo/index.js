/**
 * 2的幂 https://leetcode-cn.com/problems/power-of-two/ [简单]
 *
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 *
 * 示例 1:
 *  输入: 1
 *  输出: true
 *  解释: 20 = 1
 *
 * 示例 2:
 *  输入: 16
 *  输出: true
 *  解释: 24 = 16
 *
 * 示例 3:
 *  输入: 218
 *  输出: false
 */

/**
 * 解题思路:
 *  方法一：暴力法，不断处以2，当除不尽时，判断商是否为1
 *  方法二：转换成二进制字符串，再判断是否1开头，其它位都为0，return /^10*$/.test(n.toString(2));
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }

  while(n % 2 === 0) {
    n = n / 2;
  }

  return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo2 = function(n) {
  if (n <= 0) {
    return false;
  }

  return /^10*$/.test(n.toString(2));
};