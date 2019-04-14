/**
 * 字符串相乘 https://leetcode-cn.com/problems/multiply-strings/submissions/
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *  输入: num1 = "2", num2 = "3"
 *  输出: "6"
 *
 * 示例 2:
 *  输入: num1 = "123", num2 = "456"
 *  输出: "56088"
 *
 * 说明：
 *  - num1 和 num2 的长度小于110。
 *  - num1 和 num2 只包含数字 0-9。
 *  - num1 和 num2 均不以零开头，除非是数字 0 本身。
 *  - 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 */

/**
 * 解题思路:
 *  大数字符串相加，将乘法转换成加法
 */

/**
 * @param {array} nums
 * @return {string}
 */
var addition = function(nums) {
  var numStrs = nums.map(function(num) { return num.split('') });
  var result = [];
  var carry = 0;
  while(numStrs.length) {
    var sum = carry;
    for (var i = 0; i < numStrs.length;) {
      sum += parseInt(numStrs[i].pop(), 10);

      if (!numStrs[i].length) {
        numStrs.splice(i, 1);
      } else {
        i ++;
      }
    }

    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);
  }

  if (carry) {
    result.unshift(carry);
  }

  return result.join('');
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  var nums = num1.split('').reverse();
  var sums = [];
  for (var i = 0; i < nums.length; i ++) {
    var num = parseInt(nums[i], 10);
    if (num === 0) {
      continue;
    }

    var sum = addition(new Array(num).fill(num2));
    sum += i ? new Array(i).fill('0').join('') : '';
    sums.push(sum);
  }

  return addition(sums);
};
