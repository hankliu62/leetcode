/**
 * 螺旋矩阵 II https://leetcode-cn.com/problems/spiral-matrix-ii/ [中等]
 *
 * 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 *
 * 示例:
 *  输入: 3
 *  输出:
 *  [
 *   [ 1, 2, 3 ],
 *   [ 8, 9, 4 ],
 *   [ 7, 6, 5 ]
 *  ]
 */

/**
 * 解题思路:
 *  暴力法
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var result = [];
  for (var i = 0; i < n; i ++) {
    result.push([]);
  }

  var i = 0;
  var j = 0;
  var exist = {};
  var num = 1;
  var changeType = 0; // 0: j++; 1: i++; 2: j--; 3: i--
  while (num <= n * n) {
    result[i][j] = num ++;
    exist[i + '-' + j] = true;
    if (changeType === 0) {
      if (j < n - 1 && !exist[i + '-' + (j + 1)]) {
        j ++;
      } else if (i < n - 1 && !exist[(i + 1) + '-' + j]) {
        i ++;
        changeType = (changeType + 1) % 4;
      }
    } else if (changeType === 1) {
      if (i < n - 1 && !exist[(i + 1) + '-' + j]) {
        i ++;
      } else if (j > 0 && !exist[i + '-' + (j - 1)]) {
        j --;
        changeType = (changeType + 1) % 4;
      }
    } else if (changeType === 2) {
      if (j > 0 && !exist[i + '-' + (j - 1)]) {
        j --;
      } else if (i > 0 && !exist[(i - 1) + '-' + j]) {
        i --;
        changeType = (changeType + 1) % 4;
      }
    } else {
      if (i > 0 && !exist[(i - 1) + '-' + j]) {
        i --;
      } else if (j < n - 1 && !exist[i + '-' + (j + 1)]) {
        j ++;
        changeType = (changeType + 1) % 4;
      }
    }
  }

  return result;
};
