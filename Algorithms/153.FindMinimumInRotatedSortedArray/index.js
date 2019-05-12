/**
 * 寻找旋转排序数组中的最小值 https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/ [中等]
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 *
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 *
 * 请找出其中最小的元素。
 *
 * 你可以假设数组中不存在重复元素。
 *
 * 示例 1:
 *  输入: [3,4,5,1,2]
 *  输出: 1
 *
 * 示例 2:
 *  输入: [4,5,6,7,0,1,2]
 *  输出: 0
 */

/**
 * 解题思路:
 *  方法一：暴力法，找寻前一个元素比自己大，后一个元素也比自己大的元素
 *  方法二: 投机法，先排序再取第0个
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length <= 1) {
    return nums[0];
  }

  var min = nums[0];

  for (var i = 1; i < nums.length - 1; i ++) {
    if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
      min = nums[i];
      break;
    }
  }

  return Math.min(min, nums[0], nums[nums.length - 1]);
};

var findMin = function(nums) {
  return nums.sort(function(a, b) { return a- b; })[0];
};
