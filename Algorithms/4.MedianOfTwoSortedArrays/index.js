/**
 * 寻找两个有序数组的中位数 https://leetcode-cn.com/problems/median-of-two-sorted-arrays/ [困难]
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *  nums1 = [1, 3]
 *  nums2 = [2]
 *
 *  则中位数是 2.0
 *
 * 示例 2:
 *  nums1 = [1, 2]
 *  nums2 = [3, 4]
 *
 *  则中位数是 (2 + 3)/2 = 2.5
 */

/**
 * 解题思路:
 *  方法一：投机法，先合并，排序，在取中位数
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var total = Array.prototype.concat.apply(nums1, nums2).sort(function(a, b) {
    return a - b;
  });
  const length = total.length;
  if (length === 0) {
    return 0;
  }

  if (length % 2 === 0) {
    return (total[length / 2 - 1] + total[length / 2]) / 2;
  }

  return total[Math.floor(length / 2)];
};