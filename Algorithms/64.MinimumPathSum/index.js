/**
 * 最小路径和 https://leetcode-cn.com/problems/minimum-path-sum/ [中等]
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 *
 * 示例:
 *  输入:
 *  [
 *    [1,3,1],
 *    [1,5,1],
 *    [4,2,1]
 *  ]
 *  输出: 7
 *
 *  解释: 因为路径 1→3→1→1→1 的总和最小。
 */

/**
 * 解题思路:
 *  暴力法: ways[m][n]表示对应路径， ways[m][n] = grid[m][n] + Math.min(ways[m - 1][n], ways[m][n - 1]), ways[0][0] = grid[0][0];
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid.length) {
    return 0;
  }

  var m = grid.length;
  var n = grid[0].length;
  var ways = [];
  for (var i = 0; i < m; i ++) {
    ways.push([]);
  }

  ways[0][0] = grid[0][0];
  for (var i = 0; i < m; i ++) {
    for (var j = 0; j < n; j ++) {
      if (i === 0) {
        ways[i][j] = j === 0 ? ways[0][0] : grid[i][j] + ways[i][j - 1];
      } else if (j === 0) {
        ways[i][j] = grid[i][j] + ways[i - 1][j];
      } else {
        ways[i][j] = grid[i][j] + Math.min(ways[i - 1][j], ways[i][j - 1]);
      }
    }
  }

  return ways[m-1][n-1];
};