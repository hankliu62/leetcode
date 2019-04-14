/**
 * 子集 II https://leetcode-cn.com/problems/subsets-ii/ [中等]
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *  输入: [1,2,2]
 *  输出:
 *  [
 *    [2],
 *    [1],
 *    [1,2,2],
 *    [2,2],
 *    [1,2],
 *    []
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var exists = {};

  var subsets = function(nums, exists) {
    if (nums.length === 0) {
      return [[]];
    }

    if (nums.length === 1) {
      exists[nums[0] + ''] = true;
      return [[nums[0]], []];
    }

    var num = nums[0];
    var subNums = nums.slice(1);
    var subResults = subsets(subNums, exists);
    var result = [...subResults];
    for (var subResult of subResults) {
      const items = [...subResult, num].sort();
      if (!exists[items.join('-')]) {
        exists[items.join('-')] = true;
        result.push(items);
      }
    }
    return result;
  }

  return subsets(nums, exists);
};

console.log(subsetsWithDup([4,4,4,1,4]))