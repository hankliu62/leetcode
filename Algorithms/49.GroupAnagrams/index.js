/**
 * 字母异位词分组 https://leetcode-cn.com/problems/group-anagrams/
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 示例:
 *  输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 *  输出:
 *  [
 *    ["ate","eat","tea"],
 *    ["nat","tan"],
 *    ["bat"]
 *  ]
 *
 * 说明：
 *  - 所有输入均为小写字母。
 *  - 不考虑答案输出的顺序。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var cache = {};
  for (var str of strs) {
    var sorted = str.split('').sort().join('');
    if (cache[sorted]) {
      cache[sorted].push(str);
    } else {
      cache[sorted] = [str];
    }
  }

  var result = [];
  for (var key in cache) {
    if (Object.prototype.hasOwnProperty.call(cache, key)) {
      result.push(cache[key]);
    }
  }

  return result;
};
