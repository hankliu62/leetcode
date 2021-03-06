/**
 * 合并两个有序数组 https://leetcode-cn.com/problems/merge-sorted-array/ [简单]
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 *
 * 说明:
 *  - 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 *  - 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 * 示例:
 *  输入:
 *  nums1 = [1,2,3,0,0,0], m = 3
 *  nums2 = [2,5,6],       n = 3
 *
 *  输出: [1,2,2,3,5,6]
 */

var binarySearchIndex = function(nums, target, start, end) {
  var start = start || 0;
  var end = end === undefined ? nums.length : end;

  if (start >= end) {
    if (nums[start] >= target) {
      return start;
    }

    return start + 1;
  }

  var middle = Math.floor((start + end) / 2);
  if (nums[middle] === target) {
    return middle;
  }

  if (nums[middle] < target) {
    return binarySearchIndex(nums, target, middle + 1, end);
  }

  return binarySearchIndex(nums, target, start, middle - 1);
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const length  = nums1.length;
  nums1.splice(m, length - m);

  for (var i = 0; i < n && i < nums2.length; i ++) {
    var num = nums2[i];
    var index = binarySearchIndex(nums1, num);

    if (index === -1) {
      nums1.splice(0, 0, num);
    } else if (index === nums1.length) {
      nums1.push(num);
    } else {
      nums1.splice(index, 0, num);
    }
  }
};

console.log(merge([-1,-1,0,0,0,0], 4, [-1,0], 2));