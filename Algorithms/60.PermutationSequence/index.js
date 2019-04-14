/**
 * 第k个排列 https://leetcode-cn.com/problems/permutation-sequence/ [中等]
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 *  - "123"
 *  - "132"
 *  - "213"
 *  - "231"
 *  - "312"
 *  - "321"
 *
 * 给定 n 和 k，返回第 k 个排列。
 *
 * 说明：
 *  - 给定 n 的范围是 [1, 9]。
 *  - 给定 k 的范围是[1,  n!]。
 *
 * 示例 1:
 *  输入: n = 3, k = 3
 *  输出: "213"
 *
 * 示例 2:
 *  输入: n = 4, k = 9
 *  输出: "2314"
 */

/**
 * 解题思路:
 *
 */

var factorial = function(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var result = [];
  var nums = [];
  for (var i = 0; i < n; i ++) {
    nums.push(i + 1);
  }

  if (n === 0 || k === 0) {
    return nums.join('');
  }

  var factorialNum = factorial(n);

  if (k > factorialNum) {
    return nums.reverse().join('');
  }

  var i = n - 1;
  var factorialNum = factorialNum / n;
  var merchant = Math.floor(k / factorialNum);
  var remainder = k % factorialNum;
  while (i >= 0) {
    if (remainder === 0) {
      merchant--;
    }
    result.push(nums[merchant]);
    nums.splice(merchant, 1);

    if (remainder === 0) {
      break;
    }

    k = remainder;
    factorialNum = factorialNum / i;
    merchant = Math.floor(k / factorialNum);
    remainder = k % factorialNum;
    i --;
  }

  return result.join('') + nums.reverse().join('');
};
