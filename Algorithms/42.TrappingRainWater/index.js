/**
 * 接雨水 https://leetcode-cn.com/problems/trapping-rain-water/
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
 *
 * 示例:
 *  输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 *  输出: 6
 */

/**
 * 解题思路:
 *  分而治之(分治术): 每次查找height数组中的最高点，当height长度小于3时，返回0
 *    当最高点位置在(0, height.length - 1)上时，计算空的位置（(height.length - 2) * Math.min(height[0], height[height.length - 1]) - 中间位置的高度）
 *    当最高点位置在[1~height.length - 2]中时，分而治之，拆成两个子的height数组，第一个为height[0:maxIndex]，第二个为height[maxIndex]
 */

var splitSubTrap = function(height) {
  if (height.length < 3) {
    return 0;
  }

  var start = height[0];
  var end = height[height.length - 1];
  var min = Math.min(start, end);

  var max = min;
  var maxIndex = -1;
  var total = 0;
  for (var i = 1; i < height.length - 1; i ++) {
    if (height[i] > max) {
      max = height[i];
      maxIndex = i;
    }

    total += height[i];
  }

  if (maxIndex === -1) {
    return min * (height.length - 2) - total;
  }

  return splitSubTrap(height.slice(0, maxIndex + 1)) + splitSubTrap(height.slice(maxIndex, height.length));
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  return(splitSubTrap(height));
};
