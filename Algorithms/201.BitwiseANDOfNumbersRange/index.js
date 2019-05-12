/**
 * 数字范围按位与 https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/ [中等]
 *
 * 给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。
 *
 * 示例 1:
 *  输入: [5,7]
 *  输出: 4
 *
 * 示例 2:
 *  输入: [0,1]
 *  输出: 0
 */

/**
 * 解题思路：
 *  方法一、等价与查找公共前缀
 *  方法二、从高位向低位与，利用 n&(n-1)的特性： n & (n - 1) 可以将 n 最右边的 1 变成 0
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd1 = function(m, n) {
  var step = 0;
  while (m !== n) {
    m >>= 1;
    n >>= 1;
    step++;
  }
  m <<= step;
  return m;
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  while(n > m) {
    n &= n - 1;
  }

  return n;
};
