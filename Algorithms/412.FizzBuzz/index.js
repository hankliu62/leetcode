/**
 * Fizz Buzz https://leetcode-cn.com/problems/fizz-buzz/ [简单]
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 3. 如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 *
 * 示例：
 *
 *  n = 15,
 *  返回:
 *  [
 *      "1",
 *      "2",
 *      "Fizz",
 *      "4",
 *      "Buzz",
 *      "Fizz",
 *      "7",
 *      "8",
 *      "Fizz",
 *      "Buzz",
 *      "11",
 *      "Fizz",
 *      "13",
 *      "14",
 *      "FizzBuzz"
 *  ]
 */

/**
 * 解题思路:
 *  方法一：暴力法，循环相除，判断是否除尽
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [];
  for (var i = 1; i <= n; i ++) {
    var str = '';
    if (i % 3 === 0) {
      str += 'Fizz';
    }

    if (i % 5 === 0) {
      str += 'Buzz';
    }

    result.push(str || '' + i);
  }

  return result;
};