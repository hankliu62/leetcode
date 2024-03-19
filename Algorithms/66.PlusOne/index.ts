/**
 * 加一 https://leetcode-cn.com/problems/plus-one/ [简单]
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *  输入: [1,2,3]
 *  输出: [1,2,4]
 *  解释: 输入数组表示数字 123。
 *
 * 示例 2:
 *  输入: [4,3,2,1]
 *  输出: [4,3,2,2]
 *  解释: 输入数组表示数字 4321。
 */

/**
 * 数组的最后一位加一，如果是十位数的话，保留小数，倒数第二位加一
 *
 * @param digits
 * @returns
 */
function plusOne(digits: number[]): number[] {
  let increase = 1;
  for (let i = digits.length - 1; i >= 0; i --) {
    digits[i] += increase;
    increase = (digits[i] / 10) | 0; // 取整
    digits[i] %= 10;

    if (increase === 0) {
      break;
    }
  }

  if (increase === 1) {
    digits.unshift(increase)
  }

  return digits;
};
