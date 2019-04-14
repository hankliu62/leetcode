/**
 * 跳跃游戏 https://leetcode-cn.com/problems/jump-game/ [中等]
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 *
 * 示例 1:
 *  输入: [2,3,1,1,4]
 *  输出: true
 *  解释: 从位置 0 到 1 跳 1 步, 然后跳 3 步到达最后一个位置。
 *
 * 示例 2:
 *  输入: [3,2,1,0,4]
 *  输出: false
 *  解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 */

/**
 * 解题思路
 *  暴力法：循环nums数组，在通过变量maxIndex记录当前元素能到达的最大位置，maxIndex = Math.max(i + nums[i], maxIndex);
 *        当当前下标大于maxIndex时，表示到达不了当前位置，也就不能到达最后的位置
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var maxIndex = 0;
  for (var i = 0; i < nums.length; i ++) {
    if (i > maxIndex) {
      return false;
    }

    maxIndex = Math.max(i + nums[i], maxIndex);
  }

  return true;
};
