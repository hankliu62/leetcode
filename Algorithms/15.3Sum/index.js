/**
 * 三数之和
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例：
 *  例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *  满足要求的三元组集合为：
 *  [
 *    [-1, 0, 1],
 *    [-1, -1, 2]
 *  ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   const result = [];
//   if (nums.length < 3) {
//     return result;
//   }

//   var exist = {};

//   var temp = {};
//   for (var i = 0; i < nums.length; i ++) {
//     temp[-nums[i]] = i;
//   }

//   for (var i = 0; i < nums.length; i ++) {
//     for (var j = i + 1; j < nums.length; j ++) {
//       var sum = (nums[i] + nums[j]);
//       if (sum in temp && i !== temp[sum] && j !== temp[sum]) {
//         var items = [];
//         if (temp[sum] < i) {
//           items = items.concat(nums[temp[sum]], nums[i], nums[j]);
//         } else if (temp[sum] > j) {
//           items = items.concat(nums[i], nums[j], nums[temp[sum]]);
//         } else {
//           items = items.concat(nums[i], nums[temp[sum]], nums[j]);
//         }
//         items = items.sort(function(a, b) {
//           return a - b;
//         });

//         if (!exist[items.join('')]) {
//           exist[items.join('')] = true;
//           result.push(items);
//         }
//       }
//     }
//   }

//   return result;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function(nums) {
  nums = nums.sort(function(a, b) { return a - b; });
  var flag = {};
  var result = [];
  for (var i = 0; i < nums.length; i ++) {
    if (i > 0 && nums[i - 1] === nums[i]){
      continue;
    }
    var start = i + 1;
    var end = nums.length - 1;
    while (start < end) {
      var sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        var flagKey = '' + nums[i] + nums[start] + nums[end];
        if (!flag[flagKey]) {
          flag[flagKey] = true;
          result.push([nums[i], nums[start], nums[end]]);

          if (nums[start] === nums[end]) {
            start ++;
          }
        }

        start ++;
        end --;
      } else if (sum < 0) {
        start ++;
      } else {
        end --;
      }
    }
  }

  return result;
};
