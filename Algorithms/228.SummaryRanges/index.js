/**
 * 汇总区间 https://leetcode-cn.com/problems/summary-ranges/ [中等]
 *
 * 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
 *
 * 示例 1:
 *  输入: [0,1,2,4,5,7]
 *  输出: ["0->2","4->5","7"]
 *  解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
 *
 * 示例 2:
 *  输入: [0,2,3,4,6,8,9]
 *  输出: ["0","2->4","6","8->9"]
 *  解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums || !nums.length) {
    return [];
  }

  if (nums.length === 1) {
    return ['' + nums[0]];
  }

  const result = [nums.shift()];
  let continuity = 1;
  for (let i = 0, len = nums.length; i < len; i ++) {
    const num = nums[i];
    const resLength = result.length;
    const last = result[resLength - 1];
    if (last + continuity === num) {
      if (i === len - 1) {
        result[resLength - 1] = last + '->' + (last + continuity);
      }
      continuity ++;
    } else {
      if (i === len - 1) {
        if (continuity !== 1) {
          result[resLength - 1] = last + '->' + (last + continuity - 1);
        }

        result.push(num + '');
      } else {
        if (continuity === 1) {
          result[resLength - 1] = '' + result[resLength - 1];
        } else {
          result[resLength - 1] = last + '->' + (last + continuity - 1);
        }
        result.push(num);
      }
      continuity = 1;
    }
  }

  return result.map(function(item) { return '' + item; });
};