/**
 * 括号生成
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 示例:
 *  给出 n = 3，生成结果为：
 *  [
 *    "((()))",
 *    "(()())",
 *    "(())()",
 *    "()(())",
 *    "()()()"
 *  ]
 */

/**
 * 解题思路：
 *  采用递归的方式
 *  当n = 0时，返回[]
 *  当n = 1时，返回['()']
 *  当n = 2时，将'()'插入到['()']中'()'字符串的0, 1, 2等位置，再返回一个唯一性的数组。
 *  当n = m + 1时，将'()'插入n = m的结果集中的任意位置，返回一个唯一性的数组。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = new Set();

  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    return ['()'];
  }

  const rs = generateParenthesis(n - 1);
  for (const item of rs) {
    for (let i = 0; i < item.length; i++) {
      result.add(item.substring(0, i) + '()' + item.substring(i));
    }
  }

  return [...result];
};
