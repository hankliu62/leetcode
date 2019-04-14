/**
 * 只出现一次的数字 III https://leetcode-cn.com/problems/single-number-iii/ [中等]
 *
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
 * 示例 :
 *  输入: [1,2,1,3,2,5]
 *  输出: [3,5]
 *
 * 注意：
 *  结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
 *  你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？
 */

/**
 * 解题思路:
 *  暴力法: 循环数组，第一次出现时元素当作key保存在临时变量对象中，当再次出现的时候，删除该key，最后返回临时变量所有的key
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var temp = {};
  for (const num of nums) {
    if (temp[num]) {
      delete temp[num];
    } else {
      temp[num] = true;
    }
  }

  return Object.keys(temp);
};