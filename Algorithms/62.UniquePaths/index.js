/**
 * 不同路径 https://leetcode-cn.com/problems/unique-paths/ [中等]
 *
 * 问总共有多少条不同的路径？
 * 例如，上图是一个7 x 3 的网格。有多少可能的路径？
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *  输入: m = 3, n = 2
 *  输出: 3
 *  解释:
 *  从左上角开始，总共有 3 条路径可以到达右下角。
 *  1. 向右 -> 向右 -> 向下
 *  2. 向右 -> 向下 -> 向右
 *  3. 向下 -> 向右 -> 向右
 *
 * 示例 2:
 *  输入: m = 7, n = 3
 *  输出: 28
 */

/**
 * 解题思路:
 *  递归法(超时): uniquePaths(m, n) = uniquePaths(m, n - 1) + uniquePaths(m - 1, n);
 *    当n或m为2时，存在n,m条
 *    当n或m为1时，存在1条
 *  暴力法: steps[m][n]表示对应路径， steps[m][n] = steps[m - 1][n] + steps[m][n - 1]，steps[0][0] = 1;
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var ways = [];
  for (var i = 0; i < m; i ++) {
    ways.push([]);
  }

  for (var i = 0; i < m; i ++) {
    for (var j = 0; j < n; j ++) {
      if (i === 0) {
        ways[i][j] = 1;
      } else if (j === 0) {
        ways[i][j] = 1;
      } else {
        ways[i][j] = ways[i - 1][j] + ways[i][j - 1];
      }
    }
  }

  return ways[m-1][n-1];
};
/*
// 递归法，超时
var uniquePaths = function(m, n) {
  if (n === 1 || m === 1) {
    return 1;
  }

  if (m === 2) {
    return n;
  }

  if (n === 2) {
    return m;
  }

  return uniquePaths(m, n - 1) + uniquePaths(m - 1, n);
};
*/
