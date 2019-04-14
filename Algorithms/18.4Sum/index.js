/**
 * 四数之和
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 满足要求的四元组集合为：
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var result = [];
  if (nums.length < 4) {
    return result;
  }

  var temp = {};
  var exist = {};
  nums = nums.sort(function(a, b) { return a - b; });

  for (var i = 0; i < nums.length; i ++) {
    for (var j = i + 1; j < nums.length; j ++) {
      var num = target - nums[i] - nums[j];
      if (temp[num]) {
        temp[num].push([i, j]);
      } else {
        temp[num] = [[i, j]];
      }
    }
  }

  for (var i = 0; i < nums.length; i ++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    for (var j = i + 1; j < nums.length; j ++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) {
        continue;
      }

      var num = nums[i] + nums[j];
      if (temp[num]) {
        for (var otherIndexes of temp[num]) {
          var start = otherIndexes[0];
          var end = otherIndexes[1];

          if (start === i || start === j || end === i || end === j) {
            continue;
          }

          var items = [nums[start], nums[end], nums[i], nums[j]].sort(function(a, b) { return a - b; });
          var key = items.join('');
          if (!exist[key]) {
            result.push(items);
            exist[key] = true;
          }
        }
      }
    }
  }

  return result;
};
