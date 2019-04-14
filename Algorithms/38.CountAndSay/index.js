/**
 * 报数
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 *  1.     1
 *  2.     11
 *  3.     21
 *  4.     1211
 *  5.     111221
 *
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 注意：整数顺序将表示为一个字符串。
 */

/**
 * 解题思路：
 *  递归，后一个值依赖于前一个的，
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n < 1 || n > 30) {
    return '';
  }

  if (n === 1) {
    return '1';
  }

  if (n === 2) {
    return '11';
  }

  if (n === 3) {
    return '21';
  }

  var nums = countAndSay(n - 1).split('');
  var count = 1;
  var num = nums[0];
  var result = '';
  nums.shift();
  while(nums.length) {
    var char = nums.shift();
    if (char === num) {
      count ++;
    } else {
      result += count + '' + num;
      count = 1;
      num = char;
    }
  }

  result += count + '' + num;

  return result;
};

console.log(countAndSay(6));