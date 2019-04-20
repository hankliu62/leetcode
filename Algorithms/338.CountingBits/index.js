/**
 * 比特位计数 https://leetcode-cn.com/problems/counting-bits/ [中等]
 *
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 示例 1:
 *  输入: 2
 *  输出: [0,1,1]
 *
 * 示例 2:
 *  输入: 5
 *  输出: [0,1,1,2,1,2]
 *
 * 进阶:
 *  - 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
 *  - 要求算法的空间复杂度为O(n)。
 *  - 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 */

/**
 * 解题思路:
 *  方法一: 暴力法+投机法: 循环+number.toString(2), 替换调0，获得字符串的长度
 *  方法二:
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits2 = function(num) {
  var result = [];
  var i = 0;
  while(i <= num) {
    var str = i.toString(2);
    result.push(str.replace(/0/g, '').length);
    i++;
  }
  return result;
};

var countBits = function(num) {
  var result = [0];
  for(var i = 1; i <= num; i ++) {
    result[i] = result[i >> 1] + i % 2;
  }
  return result;
};