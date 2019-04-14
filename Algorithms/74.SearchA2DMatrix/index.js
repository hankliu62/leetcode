/**
 * 搜索二维矩阵 https://leetcode-cn.com/problems/search-a-2d-matrix/ [中等]
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 *  - 每行中的整数从左到右按升序排列。
 *  - 每行的第一个整数大于前一行的最后一个整数。
 *
 * 示例 1:
 *  输入:
 *  matrix = [
 *    [1,   3,  5,  7],
 *    [10, 11, 16, 20],
 *    [23, 30, 34, 50]
 *  ]
 *  target = 3
 *  输出: true
 *
 * 示例 2:
 *  输入:
 *  matrix = [
 *    [1,   3,  5,  7],
 *    [10, 11, 16, 20],
 *    [23, 30, 34, 50]
 *  ]
 *  target = 13
 *  输出: false
 */

/**
 * 解题思路:
 *  二分查找：两次二分查找，第一次找范围，第二次找元素
 */

var binaryFind = function(array, target, condition, start, end) {
  start = start || 0;
  end = end === undefined ? array.length - 1 : end;
  condition = condition || function(array, target, index) {
    if (array[index] === target) {
      return 0;
    }

    if (array[index] > target) {
      return -1;
    }

    return 1;
  }

  if (start > end) {
    return -1;
  }

  var middle = Math.floor((start + end) / 2);

  var compare = condition(array, target, middle);
  if (compare === 0) {
    return middle;
  }

  if (compare === -1) {
    return binaryFind(array, target, condition, start, middle - 1);
  }

  return binaryFind(array, target, condition, middle + 1, end);
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var index = binaryFind(matrix, target, function(array, target, index) {
    var items = array[index];

    if (target >= items[0] && target <= items[items.length - 1]) {
      return 0;
    }

    if (target < items[0]) {
      return -1;
    }

    return 1;
  });

  return index === -1 ? false : binaryFind(matrix[index], target) !== -1;
};
