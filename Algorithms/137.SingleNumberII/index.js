/**
 * 只出现一次的数字 II https://leetcode-cn.com/problems/single-number-ii/ [中等]
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 示例 1:
 *  输入: [2,2,3,2]
 *  输出: 3
 *
 * 示例 2:
 *  输入: [0,1,0,1,0,1,99]
 *  输出: 99
 */

/**
 * 解题思路：
 *  方法一：暴力法，循环，使用中间变量对象保存存在的元素的数量
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var temp = {};
  for (var num of nums) {
    if (temp[num]) {
      temp[num] += 1;
    } else {
      temp[num] = 1;
    }
  }

  for (var key in temp) {
    if (Object.prototype.hasOwnProperty.call(temp, key)) {
      if (temp[key] === 1) {
        return key;
      }
    }
  }
};