/**
 * 最接近的三数之和
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort(function(a, b) { return a - b; });
  var result = Number.MAX_VALUE;
  for (var i = 0; i < nums.length; i ++) {
    if (i > 0 && nums[i - 1] === nums[i]){
      continue;
    }
    var start = i + 1;
    var end = nums.length - 1;
    while (start < end) {
      var sum = nums[i] + nums[start] + nums[end];
      if (sum === target) {
        return target;
      }

      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }

      if (sum < target) {
        start ++;
      } else {
        end --;
      }
    }
  }

  return result;
};