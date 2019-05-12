/**
 * 三角形最小路径和 https://leetcode-cn.com/problems/triangle/ [中等]
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 *
 * 例如，给定三角形：
 *
 * [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 *
 * 说明：
 *  如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */

/**
 * 解题思路:
 *  方法一：动态规划法，二次循环，i 位置从triangle.length -> 0, j 位置从 0 -> triangle[i].length - 1,
 *    假设位置[i, j]经过是最小的路径，那么从最下面到该位置路径长度为: triangle[i][j] = Math.min(triangle[i + 1][j] || 0, triangle[i + 1][j + 1]) + triangle[i][j]
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (var i = triangle.length - 2; i >= 0; i --) {
    for (var j = 0; j < triangle[i].length; j ++) {
      triangle[i][j] = Math.min(triangle[i + 1][j] || 0, triangle[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return triangle[0][0];
};
