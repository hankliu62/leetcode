/**
 * 搜索旋转排序数组
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 示例 1:
 *  输入: nums = [4,5,6,7,0,1,2], target = 0
 *  输出: 4
 *
 * 示例 2:
 *  输入: nums = [4,5,6,7,0,1,2], target = 3
 *  输出: -1
 */

/**
 * 解题思路：
 *  没有理解题目意思，采用了投机取巧的方法，Javascript 中 Array.prototype.indexOf() 方法
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return nums.indexOf(target);
};