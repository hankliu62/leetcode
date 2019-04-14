/**
 * 柱状图中最大的矩形 https://leetcode-cn.com/problems/largest-rectangle-in-histogram/ [困难]
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 *
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。 5 * 2 = 10(第三个和第四个柱子构成)
 *
 * 示例:
 *  输入: [2,1,5,6,2,3]
 *  输出: 10
 */

/**
 * 解题思路：
 *  暴力法: 双重循环，计算面积比较，超时
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  var maxArea = 0;
  for (var i = 0; i < heights.length; i ++) {
    var currentMaxArea = heights[i];
    for (var j = i; j < heights.length; j ++) {
      if ((heights.length - i) * heights[j] < maxArea) {
        if (currentMaxArea > maxArea) {
          maxArea = currentMaxArea;
        }
        break;
      }

      currentMaxArea = Math.max(currentMaxArea, (j + 1 - i) * Math.min.apply(Math, heights.slice(i, j + 1)));

      if (currentMaxArea > maxArea) {
        maxArea = currentMaxArea;
      }
    }
  }

  return maxArea;
};
