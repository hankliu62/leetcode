/**
 * 螺旋矩阵 https://leetcode-cn.com/problems/spiral-matrix/ [中等]
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *  输入:
 *  [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 *  ]
 *  输出: [1,2,3,6,9,8,7,4,5]
 *
 * 示例 2:
 *  输入:
 *  [
 *    [1,2,3,4],
 *    [5,6,7,8],
 *    [9,10,11,12]
 *  ]
 *  输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var spiralOrder = function(nums) {
  if (!nums.length) {
    return [];
  }

  var result = [];
  var mark = {};
  var i = 0;
  var j = 0;
  var changeType = 0; // 0: j++; 1: i++; 2: j--; 3: i--
  while(!mark[i + '-' + j]) {
    result.push(nums[i][j]);
    mark[i + '-' + j] = true;
    if (changeType === 0) {
      if (j + 1 < nums[i].length && !mark[i + '-' + (j + 1)]) {
        j += 1;
      } else if (i + 1 < nums.length && !mark[(i + 1) + '-' + j]) {
        i += 1;
        changeType = (changeType + 1) % 4;
      }
    } else if (changeType === 1) {
      if (i + 1 < nums.length && !mark[(i + 1) + '-' + j]) {
        i += 1;
      } else if (j - 1 >= 0 && !mark[i + '-' + (j - 1)]) {
        j -= 1;
        changeType = (changeType + 1) % 4;
      }
    } else if (changeType === 2) {
      if (j - 1 >= 0 && !mark[i + '-' + (j - 1)]) {
        j -= 1;
      } else if (i - 1 >= 0 && !mark[(i - 1) + '-' + j]) {
        i -= 1;
        changeType = (changeType + 1) % 4;
      }
    } else {
      if (i - 1 >= 0 && !mark[(i - 1) + '-' + j]) {
        i -= 1;
      } else if (j + 1 < nums[i].length && !mark[i + '-' + (j + 1)]) {
        j += 1;
        changeType = (changeType + 1) % 4;
      }
    }
  }

  return result;
};
