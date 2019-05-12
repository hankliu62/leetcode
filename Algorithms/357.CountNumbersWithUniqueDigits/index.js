/**
 * 计算各个位数不同的数字个数 https://leetcode-cn.com/problems/count-numbers-with-unique-digits/ [中等]
 *
 * 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10n 。
 *
 * 示例:
 *  输入: 2
 *  输出: 91
 *  解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。
 */

/**
 * 解题思路：
 *  方法一：排列组合方式，当 2 ≤ x < 10时，这个位数的数字数字都不同的数字 x 的个数为 9 * 9 * ... (10 - n + 1)，再把前面位数的个数相加，即得到总个数
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  const dp = [1, 9];
  for (var i = 2; i < 10; i ++) {
    dp[i] = dp[i - 1] * (10 - i + 1);
  }

  return dp.slice(0, Math.min(n + 1, 11)).reduce(function(sum, num) { return sum + num; }, 0);
};
