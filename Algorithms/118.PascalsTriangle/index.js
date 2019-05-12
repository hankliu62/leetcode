/**
 * 杨辉三角 https://leetcode-cn.com/problems/pascals-triangle/ [简单]
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *  输入: 5
 *  输出:
 *  [
 *       [1],
 *      [1,1],
 *     [1,2,1],
 *    [1,3,3,1],
 *   [1,4,6,4,1]
 *  ]
 */

/**
 * 解题思路:
 *  方法一：暴力法，循环，array[i][j] = (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0),
 *    值得注意的是，当 j 为 0 或者 result[i - 1].length 时，其中result[i - 1][j - 1]和result[i - 1][j]某一个为undefined, 要特殊补0处理
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]];
  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return result;
  }
  var i = 1;
  while (i < numRows) {
    var array = [];
    for (var j = 0; j <= result[i - 1].length; j ++) {
      array[j] = (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0)
    }
    result.push(array);
    i ++;
  }

  return result;
};
