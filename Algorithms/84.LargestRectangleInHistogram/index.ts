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
 * 计算给定高度数组中最大矩形的面积
 * @param heights 数组中每个元素代表柱状图的 height
 * @return 返回最大矩形的面积
 */
function largestRectangleArea(heights: number[]): number {
  // 在数组首尾添加哨兵元素，以简化边界条件的处理
  heights.unshift(0);
  heights.push(0);
  const len = heights.length;

  let result = 0; // 初始化最大面积为0

  // 使用栈来记录柱状图中每个柱子的索引，栈中的元素代表的是当前高度曲线的左边界的索引
  const stacks = [0];
  for (let i = 1; i < len; i ++) {
    // 当栈不为空且当前高度小于等于栈顶柱子的高度时，计算以栈顶柱子为高的矩形面积
    while (stacks.length > 0 && heights[stacks[stacks.length - 1]] > heights[i]) {
      const height = heights[stacks.pop()!]; // 弹出栈顶柱子的高度
      const width = i - stacks[stacks.length - 1] - 1; // 计算当前柱子到栈顶柱子的宽度
      result = Math.max(result, height * width); // 更新最大面积
    }
    stacks.push(i);
  }

  return result; // 返回最大面积
};

/**
 * 暴力法 超时
 * 计算给定高度数组中最大矩形的面积
 * @param heights 数组，包含每个柱子的高度
 * @return 返回最大矩形的面积
 */
function largestRectangleArea1(heights: number[]): number {
  const len = heights.length;
  let result = 0; // 初始化最大面积为0

  // 遍历每个柱子，计算以每个柱子为基准的最大面积
  for (let i = 0; i < len; i ++) {
    let left = i; // 初始化左边界为当前柱子
    let right = i; // 初始化右边界为当前柱子

    // 向左扩展，找到第一个高度大于当前柱子的柱子
    while (left >= 0 && heights[i] <= heights[left]) {
      left --;
    }

    // 向右扩展，找到第一个高度大于当前柱子的柱子
    while (right < len && heights[i] <= heights[right]) {
      right ++;
    }

    // 计算以当前柱子为基准的矩形面积，并更新最大面积
    result = Math.max(result, heights[i] * (right - left - 1));
  }

  return result; // 返回最大面积
};
