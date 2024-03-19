/**
 * 最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/ [简单]
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *  输入: ["flower","flow","flight"]
 *  输出: "fl"
 *
 * 示例 2:
 *  输入: ["dog","racecar","car"]
 *  输出: ""
 *  解释: 输入不存在公共前缀。
 *
 * 说明:
 *  所有输入只包含小写字母 a-z 。
 */

/**
 * 解题思路:
 *  方法一: 暴力法
 *  方法二: 分治法
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs: string[]) {
  if (!strs.length) {
      return '';
  }

  if (strs.length === 1) {
      return strs[0];
  }

  var compare = strs[0];
  strs = strs.slice(1);

  var length = compare.length;
  var index = -1;
  var i = Math.floor(length / 2);
  while(i !== index) {
      var sub = compare.slice(0, i + 1);
      if (strs.every(function(str) { return str.indexOf(sub) === 0; })) {
          index = i;
          i = Math.floor((i + length) / 2);
      } else {
          i = Math.floor((index + i) / 2);
      }
  }

  return index !== -1 ? compare.slice(0, index + 1) : '';
};

const longestCommonPrefixPartition = function(strs: string[]): string {
  function partition(strs: string[]): string {
    const length = strs.length;
    const mid = length >> 1
    if (length === 1) {
      return strs[0]
    }

    if (length === 2) {
      const [pre, next] = strs;

      let i = 0;
      for (; i < pre.length; i ++ ) {
        if (pre[i] !== next[i]) {
          break;
        }
      }

      return pre.slice(0, i);
    }
    const left = strs.slice(0, mid);
    const right = strs.slice(mid, length)
    console.log(mid, left, right);
    return partition([partition(left), partition(right)]);
  }

  return partition(strs);
}

console.log(longestCommonPrefixPartition(["flower","flow","flight"]))
