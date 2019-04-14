/**
 * 子集 https://leetcode-cn.com/problems/subsets/ [中等]
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *  输入: nums = [1,2,3]
 *  输出:
 *  [
 *    [3],
 *    [1],
 *    [2],
 *    [1,2,3],
 *    [1,3],
 *    [2,3],
 *    [1,2],
 *    []
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0) {
    return [[]];
  }

  if (nums.length === 1) {
    return [[nums[0]], []];
  }

  var num = nums[0];
  var subNums = nums.slice(1);
  var subResults = subsets(subNums);
  var result = [...subResults];
  for (var subResult of subResults) {
    result.push([...subResult, num]);
  }
  return result;
};
