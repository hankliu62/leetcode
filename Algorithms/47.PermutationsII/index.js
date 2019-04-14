/**
 * 全排列 II
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 *  输入: [1,1,2]
 *  输出:
 *  [
 *    [1,1,2],
 *    [1,2,1],
 *    [2,1,1]
 *  ]
 */

/**
 * 解题思路:
 *  递归法: 当nums长度为1时，返回[nums]，
 *    否则nums的结果为nums[0:length-1]结果的基础上，将最后一个元素依次插入二维数组元素中的每一个位置
 *    同时，使用一个临时变量保存该组合是否以及存在
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 1) {
    return [nums];
  }

  var result = [];
  var copyNums = JSON.parse(JSON.stringify(nums));
  var lastItem = copyNums.pop();
  var previousResult = permuteUnique(copyNums);
  var exists = {};
  for (var items of previousResult) {
    for (var i = 0, length = items.length; i <= length; i ++) {
      var copyItems = JSON.parse(JSON.stringify(items))
      copyItems.splice(i, 0, lastItem);
      var key = copyItems.join('');
      if (!exists[key]) {
        result.push(copyItems);
        exists[key] = true;
      }
    }
  }

  return result;
};
