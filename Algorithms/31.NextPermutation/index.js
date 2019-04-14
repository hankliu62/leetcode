/**
 * 下一个排列
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 *  1,2,3 → 1,3,2
 *  3,2,1 → 1,2,3
 *  1,1,5 → 1,5,1
 */

/**
 * 解题思路:
 *  循环数组从下标length - 1开始，一直到下标为1的元素，与前一个元素比较
 *    - 如果前一个元素比后一个元素小，截取从0开始到循环元素前两个元素的子字符串，从截取后的元素里面从结尾往前循环查找，
 *      找到一个比子数组中第一个元素大的元素，截取出来，对剩余的元素排序，在依次将前两次截取的元素插入到排序后数组的最前面
 *    - 如果直到循环结束，前一个元素都大于循环的元素，则表示不存在下一个更大的排列，将数组倒置，获得最小的排列
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (var i = nums.length - 1; i > 0; i --) {
    if (nums[i - 1] < nums[i]) {
      var heads = nums.splice(0, i - 1);
      for (var j = nums.length - 1; j > 0; j --) {
        if (nums[j] > nums[0]) {
          var head = nums.splice(j, 1);
          nums = nums.sort(function(a, b) { return a - b; });
          nums.unshift(head);
          [].unshift.apply(nums, heads);
          return nums;
        }
      }
    }
  }

  return nums.reverse();
};
