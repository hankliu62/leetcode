/**
 * 在排序数组中查找元素的第一个和最后一个位置
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例 1:
 *  输入: nums = [5,7,7,8,8,10], target = 8
 *  输出: [3,4]
 *
 * 示例 2:
 *  输入: nums = [5,7,7,8,8,10], target = 6
 *  输出: [-1,-1]
 *
 */

/**
 * 解题思路：
 *  先二分查找，没找到，返回[-1,-1], 找到，下标递增递减循环，查询与目标元素相同的元素的下标
 */

var binarySearch = function(nums, target, start, end) {
  start = start || 0;
  end = end === undefined ? nums.length - 1 : end;
  if (start > end) {
    return -1;
  }

  var middle = Math.floor((start + end) / 2);

  if (nums[middle] === target) {
    return middle;
  }

  if (nums[middle] < target) {
    return binarySearch(nums, target, middle + 1, end);
  }

  return binarySearch(nums, target, start, middle - 1);
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var index = binarySearch(nums, target);

  var start = index;
  var end = index;

  if (index === -1) {
    return [-1, -1];
  }

  while(nums[--start] === target) {}
  while(nums[++end] === target) {}

  return [start + 1, end - 1];
};
