/**
 * 不同路径 II https://leetcode-cn.com/problems/unique-paths-ii/ [中等]
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *  输入:
 *  [
 *    [0,0,0],
 *    [0,1,0],
 *    [0,0,0]
 *  ]
 *  输出: 2
 *
 *  解释:
 *  3x3 网格的正中间有一个障碍物。
 *  从左上角到右下角一共有 2 条不同的路径：
 *  1. 向右 -> 向右 -> 向下 -> 向下
 *  2. 向下 -> 向下 -> 向右 -> 向右
 */

/**
 * 解题思路:
 *  暴力法: steps[m][n]表示对应路径， steps[m][n] = steps[m - 1][n] + steps[m][n - 1]，steps[0][0] = 1;
 *    当obstacleGrid[m][n] === 1时，steps[m][n] = 0
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length) {
    return 0;
  }

  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  var ways = [];
  for (var i = 0; i < m; i ++) {
    ways.push([]);
  }

  ways[0][0] = 1;
  for (var i = 0; i < m; i ++) {
    for (var j = 0; j < n; j ++) {
      if (obstacleGrid[i][j]) {
        ways[i][j] = 0;
      } else if (i === 0) {
        ways[i][j] = j === 0 ? ways[0][0] : ways[i][j - 1];
      } else if (j === 0) {
        ways[i][j] = ways[i - 1][j];
      } else {
        ways[i][j] = ways[i - 1][j] + ways[i][j - 1];
      }
    }
  }

  return ways[m-1][n-1];
};