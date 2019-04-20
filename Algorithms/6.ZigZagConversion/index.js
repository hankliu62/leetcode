/**
 * Z 字形变换 https://leetcode-cn.com/problems/zigzag-conversion/ [中等]
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例 1:
 *  输入: s = "LEETCODEISHIRING", numRows = 3
 *  输出: "LCIRETOESIIGEDHN"
 *
 * 示例 2:
 *  输入: s = "LEETCODEISHIRING", numRows = 4
 *  输出: "LDREOEIIECIHNTSG"
 *
 *  解释:
 *  L     D     R
 *  E   O E   I I
 *  E C   I H   N
 *  T     S     G
 */

/**
 * 解题思路：
 *  方法一: 暴力法
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  var result = '';
  for (var i = 0; i < numRows; i ++) {
    var j = 0;
    while((2 * (numRows - 1) * j - i) < s.length) {
      if (i === 0) {
        result = result.concat(s[2 * (numRows - 1) * j] || '');
      } else {
        var preIndex = 2 * (numRows - 1) * j - i;
        var nextIndex = 2 * (numRows - 1) * j + i;
        if (preIndex >= 0 && preIndex < s.length) {
          result = result.concat(s[preIndex]);
        }
        if (i !== numRows - 1 && nextIndex > preIndex && nextIndex >= 0 && nextIndex < s.length) {
          result = result.concat(s[nextIndex]);
        }
      }
      j ++;
    }
  }

  return result;
};