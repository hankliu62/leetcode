/**
 * 238. 除自身以外数组的乘积 https://leetcode.cn/problems/product-of-array-except-self [中等]

给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

示例 1:
  输入: nums = [1,2,3,4]
  输出: [24,12,8,6]
示例 2:
  输入: nums = [-1,1,0,-3,3]
  输出: [0,0,9,0,0]

提示：
  2 <= nums.length <= 10 ** 5
  -30 <= nums[i] <= 30
  保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 */

/**
 * 计算除了当前元素外，数组中所有元素的乘积，并将结果组成一个新的数组返回。
 * @param nums 输入的数字数组
 * @return 返回一个新数组，其中的每个元素都是原数组中除了当前索引对应的元素外，其他元素的乘积。
 */
function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;

  // 初始化结果数组，长度与输入数组相同，并将第一个元素设为1
  const res: number[] = Array.from({ length: len });
  res[0] = 1;

  // 计算左侧乘积：res[i]表示nums[0]到nums[i-1]的乘积
  for (let i = 1; i < len; i ++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  // 计算右侧乘积，并与左侧乘积相乘，得到最终结果
  let right = 1;
  for (let i = len - 1; i >= 0; i --) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};
