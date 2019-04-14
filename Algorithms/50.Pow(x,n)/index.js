/**
 * Pow(x, n) https://leetcode-cn.com/problems/powx-n/
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 *  输入: 2.00000, 10
 *  输出: 1024.00000
 *
 * 示例 2:
 *  输入: 2.10000, 3
 *  输出: 9.26100
 *
 * 示例 3:
 *  输入: 2.00000, -2
 *  输出: 0.25000
 *  解释: 2-2 = 1/(2 * 2) = 1/4 = 0.25
 *
 * 说明:
 *  - -100.0 < x < 100.0
 *  - n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 */

/**
 * 解题思路:
 *  分治法：循环指数n，每次n = Math.floor(n / 2)；当n为2的倍数时，x = x * x; 当n不为2的倍数时，result = result * x;
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  var result = 1;
  var count = Math.abs(n);
  for (var i = count; i !== 0; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      result = result * x;
    }

    x = x * x;
  }
  return n < 0 ? 1 / result : result;
};

/*
// 采用递归的方式会超时
var myPow2 = function(x, n) {
  var count = Math.abs(n);

  if (count === 1) {
    return n < 0 ? 1 / x : x;
  }

  var remainder = count % 2;
  var merchant = Math.floor(count / 2);
  var result = myPow(x, merchant) * myPow(x, merchant);
  return remainder ? result * x : result;
};
*/
