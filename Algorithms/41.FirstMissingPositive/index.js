/**
 * 缺失的第一个正数 https://leetcode-cn.com/problems/first-missing-positive/
 *
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 *
 * 示例 1:
 *  输入: [1,2,0]
 *  输出: 3
 *
 * 示例 2:
 *  输入: [3,4,-1,1]
 *  输出: 2
 *
 * 示例 3:
 *  输入: [7,8,9,11,12]
 *  输出: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var temp = {};
  for (var num of nums) {
    temp[num] = true;
  }

  var i = 1;
  while(temp[i++]) {};
  return i - 1;
};