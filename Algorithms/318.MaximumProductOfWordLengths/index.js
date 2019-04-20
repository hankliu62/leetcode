/**
 * 最大单词长度乘积 https://leetcode-cn.com/problems/maximum-product-of-word-lengths/comments/ [中等]
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。
 * 你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 *
 * 示例 1:
 *
 *  输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
 *  输出: 16
 *  解释: 这两个单词为 "abcw", "xtfn"。
 *
 * 示例 2:
 *  输入: ["a","ab","abc","d","cd","bcd","abcd"]
 *  输出: 4
 *  解释: 这两个单词为 "ab", "cd"
 *
 * 示例 3:
 *  输入: ["a","aa","aaa","aaaa"]
 *  输出: 0
 *  解释: 不存在这样的两个单词。
 */

/**
 * 解题思路：
 *  方法一：暴力法，双重循环，判断是否包含公共元素，如果包含，跳过，不包含，两个元素长度相乘，比较以及记录的最长乘积
 *
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  var max = 0;
  var length = words.length;
  for (var i = 0; i < length; i ++) {
    var exits = {};
    words[i].split('').forEach(function(char) {
      exits[char] = true;
    });

    for (var j = i + 1; j < length; j ++) {
      if (words[j].split('').some(function(char) { return exits[char]; })) {
        continue;
      }

      max = Math.max(max, words[i].length * words[j].length);
    }
  }

  return max;
};