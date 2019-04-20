/**
 * 丑数 II https://leetcode-cn.com/problems/ugly-number-ii/comments/ [中等]
 *
 * 编写一个程序，找出第 n 个丑数。
 *
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 *
 * 示例:
 *  输入: n = 10
 *  输出: 12
 *  解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 *
 * 说明:
 *  1 是丑数。
 *  n 不超过1690。
 */

/**
 * 解题思路:
 *  三指针法：定义三个变量 id2, id3, id5 分别表示*2，*3，*5 的最小丑数的位置，res = [1], 循环n-1次，
 *    取(res[id2] * 2), (res[id3] * 3), (res[id5] * 5)最小值 push 到数组res中，如果res最后一个值于
 *    (res[id2] * 2), (res[id3] * 3), (res[id5] * 5)中的任何一个相等，对应的idX的位置加1
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var result = [1];
  var id2 = 0;
  var id3 = 0;
  var id5 = 0;

  var i = 0;
  while(i < n - 1) {
    result.push(Math.min(result[id2] * 2, result[id3] * 3, result[id5] * 5));

    if (result[i + 1] === result[id2] * 2) {
      id2 += 1;
    }

    if (result[i + 1] === result[id3] * 3) {
      id3 += 1;
    }

    if (result[i + 1] === result[id5] * 5) {
      id5 += 1;
    }

    i += 1;
  }

  return result[n - 1];
};
