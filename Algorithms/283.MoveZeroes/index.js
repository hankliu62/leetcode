/**
 * 移动零 https://leetcode-cn.com/problems/move-zeroes/ [简单]
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *  输入: [0,1,0,3,12]
 *  输出: [1,3,12,0,0]
 *
 * 说明:
 *  - 必须在原数组上操作，不能拷贝额外的数组。
 *  - 尽量减少操作次数。
 */

/**
 * 解题思路：
 *  暴力法: 使用变量 count 保存0的个数，循环while(i + count < nums.length)，遇见0就 splice 后再 push 到数组中
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i = 0;
  var length = nums.length
  var count = 0;
  while(i + count < length) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      count ++;
    } else {
      i ++;
    }
  }
};