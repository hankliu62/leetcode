/**
 * 单词拆分 https://leetcode-cn.com/problems/word-break/ [中等]
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 *
 * 说明：
 *
 *  - 拆分时可以重复使用字典中的单词。
 *  - 你可以假设字典中没有重复的单词。
 *
 * 示例 1：
 *  输入: s = "leetcode", wordDict = ["leet", "code"]
 *  输出: true
 *  解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 *
 * 示例 2：
 *  输入: s = "applepenapple", wordDict = ["apple", "pen"]
 *  输出: true
 *  解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 *       注意你可以重复使用字典中的单词。
 *
 * 示例 3：
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 */

/**
 * 解题思路:
 *  方法一：动态规划, dp[i] 表示到第i个位置，能否被分割，循环i -> [1, s.length], 记录第i个位置，能否被分割,
 *    二重循环j -> [0, i), 如果 dp[j] === true 且 s.slice(j, i) 在 wordDict 存在, 则 dp[i] = true
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var len = s.length;
  var dp = [true];
  for (var i = 1; i <= len; i ++) {
    for (var j = 0; j < i; j ++) {
      if (dp[j] && wordDict.indexOf(s.slice(j, i)) > -1) {
        dp[i] = true;
        break;
      }
    }
  }

  return !!dp[len];
};
