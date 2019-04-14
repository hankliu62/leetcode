/**
 * 全排列
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *  输入: [1,2,3]
 *  输出:
 *  [
 *    [1,2,3],
 *    [1,3,2],
 *    [2,1,3],
 *    [2,3,1],
 *    [3,1,2],
 *    [3,2,1]
 *  ]
 */

/**
 * 解题思路:
 *  递归法: 当nums长度为1时，返回[nums]，
 *    否则nums的结果为nums[0:length-1]结果的基础上，将最后一个元素依次插入二维数组元素中的每一个位置
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return [nums];
  }

  var result = [];
  var copyNums = JSON.parse(JSON.stringify(nums));
  var lastItem = copyNums.pop();
  var previousResult = permute(copyNums);
  for (var items of previousResult) {
    for (var i = 0, length = items.length; i <= length; i ++) {
      var copyItems = JSON.parse(JSON.stringify(items))
      copyItems.splice(i, 0, lastItem);
      result.push(copyItems);
    }
  }

  return result;
};
