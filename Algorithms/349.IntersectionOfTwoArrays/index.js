/**
 * 两个数组的交集 https://leetcode-cn.com/problems/intersection-of-two-arrays/ [简单]
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 示例 1:
 *  输入: nums1 = [1,2,2,1], nums2 = [2,2]
 *  输出: [2]
 *
 * 示例 2:
 *  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *  输出: [9,4]
 *
 * 说明:
 *  - 输出结果中的每个元素一定是唯一的。
 *  - 我们可以不考虑输出结果的顺序。
 */

/**
 * 解题思路：
 *  方法一：暴力法，循环数组nums1，判断其中的元素是否存在于数组nums2
 *  方法二：暴力法，循环数组nums1，把其值当作某个对象的key，循环数组nums2，判断元素是否存在这个对象的key中
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var exist = {};
  var items = {};
  for (var num of nums1) {
    items[num] = true;
  }

  for (var num of nums2) {
    if (items[num] && !exist[num]) {
      exist[num] = true
    }
  }

  return Object.keys(exist);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection2 = function(nums1, nums2) {
  var exist = {};
  var result = [];
  for (var num of nums1) {
    if (nums2.indexOf(num) !== -1 && !exist[num]) {
      result.push(num);
      exist[num] = true;
    }
  }

  return result;
};