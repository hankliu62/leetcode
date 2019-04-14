/**
 * 两数相除
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 示例 1:
 *  输入: dividend = 10, divisor = 3
 *  输出: 3
 *
 * 示例 2:
 *  输入: dividend = 7, divisor = -3
 *  输出: -2
 *
 * 说明:
 *  - 被除数和除数均为 32 位有符号整数。
 *  - 除数不为 0。
 *  - 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [Math.pow(−2, 31),  Math.pow(2, 31) − 1]。本题中，如果除法结果溢出，则返回 Math.pow(2, 31) − 1。
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var absDividend = Math.abs(dividend);
  var absDivisor = Math.abs(divisor);
  var results = [];
  if (absDividend < absDivisor) {
    return 0;
  }

  while(absDivisor <= absDividend) {
    var i = 0;
    while (absDivisor * Math.pow(2, i) <= absDividend) {
      i ++;
    }

    var num = Math.pow(2, i - 1);
    results.push(num);
    absDividend = absDividend - (absDivisor * num);
  }

  var result = 0;
  for (var item of results) {
    result += item;
  }

  if (dividend < 0) {
    result = -result;
  }

  if (divisor < 0) {
    result = -result;
  }

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }

  return result;
};
