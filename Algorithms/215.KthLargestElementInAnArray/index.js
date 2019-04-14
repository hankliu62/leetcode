/**
 * 数组中的第K个最大元素 https://leetcode-cn.com/problems/kth-largest-element-in-an-array/submissions/ [中等]
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 *  输入: [3,2,1,5,6,4] 和 k = 2
 *  输出: 5
 *
 * 示例 2:
 *  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 *  输出: 4
 *
 * 说明:
 *  你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 */

/**
 * 解题思路:
 *  取巧: 利用Array.sort()先从大到小排序，在取第k个元素
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return nums.sort(function(a, b) { return b - a; })[k - 1];
};