/**
 * 最大子序和 https://leetcode.cn/problems/maximum-subarray/ 中等
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *  输入: [-2,1,-3,4,-1,2,1,-5,4],
 *  输出: 6
 *  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 * 进阶:
 *  如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

/**
 * 解题思路:
 *  动态规划，和152题类似
 *
 * @param nums
 * @returns
 */
function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let temp = nums[0];
  const length = nums.length;
  for (let i = 1; i < length; i ++) {
    if (temp >= 0) {
      temp = temp + nums[i];
    } else {
      temp = nums[i];
    }
    max = Math.max(temp, max);
  }

  return max;
};
