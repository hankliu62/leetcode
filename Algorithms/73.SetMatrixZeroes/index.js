/**
 * 矩阵置零 https://leetcode-cn.com/problems/set-matrix-zeroes/ [中等]
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 *
 * 示例 1:
 *  输入:
 *  [
 *    [1,1,1],
 *    [1,0,1],
 *    [1,1,1]
 *  ]
 *  输出:
 *  [
 *    [1,0,1],
 *    [0,0,0],
 *    [1,0,1]
 *  ]
 *
 * 示例 2:
 *  输入:
 *  [
 *    [0,1,2,0],
 *    [3,4,5,2],
 *    [1,3,1,5]
 *  ]
 *  输出:
 *  [
 *    [0,0,0,0],
 *    [0,4,5,0],
 *    [0,3,1,0]
 *  ]
 *
 * 进阶:
 *  - 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 *  - 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 *  - 你能想出一个常数空间的解决方案吗？
 */

/**
 * 解题思路：
 *  暴力法: 双重循环，遇到0将该行该列所有非0得元素置为一个特殊临时值，然后再双重循环，将特殊临时值设置为0
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for (var i = 0; i < matrix.length; i ++) {
    for (var j = 0; j < matrix[i].length; j ++) {
      if (matrix[i][j] === 0) {
        for (var k = 0; k < matrix.length; k ++) {
          matrix[k][j] = matrix[k][j] !== 0 ? '.' : 0;
        }

        for (var k = 0; k < matrix[i].length; k ++) {
          matrix[i][k] = matrix[i][k] !== 0 ? '.' : 0;
        }
      }
    }
  }

  for (var i = 0; i < matrix.length; i ++) {
    for (var j = 0; j < matrix[i].length; j ++) {
      if (matrix[i][j] === '.') {
        matrix[i][j] = 0;
      }
    }
  }
};
