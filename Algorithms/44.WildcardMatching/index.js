/**
 * 通配符匹配 https://leetcode-cn.com/problems/wildcard-matching/
 *
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 *  - '?' 可以匹配任何单个字符。
 *  - '*' 可以匹配任意字符串（包括空字符串）。
 * 两个字符串完全匹配才算匹配成功。
 *
 * 说明:
 *  - s 可能为空，且只包含从 a-z 的小写字母。
 *  - p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 *
 * 示例 1:
 *  输入:
 *  s = "aa"
 *  p = "a"
 *
 *  输出: false
 *  解释: "a" 无法匹配 "aa" 整个字符串。
 *
 * 示例 2:
 *  输入:
 *  s = "aa"
 *  p = "*"
 *
 *  输出: true
 *  解释: '*' 可以匹配任意字符串。
 *
 * 示例 3:
 *  输入:
 *  s = "cb"
 *  p = "?a"
 *
 *  输出: false
 *  解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
 *
 * 示例 4:
 *  输入:
 *  s = "adceb"
 *  p = "*a*b"
 *
 *  输出: true
 *  解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
 *
 * 示例 5:
 *  输入:
 *  s = "acdcb"
 *  p = "a*c?b"
 *
 *  输入: false
 */

/**
 * 解题思路：
 *  暴力法：通过sIndex和pIndex下标记录分布记录字符串s和字符串p的匹配位置, 循环 字符串s当sIndex < sLength
 *    如果s[sIndex]和p[pIndex]相等，或者p[pIndex]为`?`，则sIndex和pIndex分别自增
 *    如果p[pIndex]为`*`, 通过starAtPIndex记录`*`在字符串p中的位置，通过startMatchedSIndex记录当前匹配字符串s的位置，pIndex自增，sIndex不变(默认当前p的`*`匹配0个字符串s的字符)
 *    如果上面两中情况都不成立，判断starAtPIndex是否存在(以前是否匹配到`*`)，pIndex重新回溯到starAtPIndex + 1, 而startMatchedSIndex自增，sIndex重新设置为startMatchedSIndex(默认当前p的`*`匹配到上一次匹配字符串s的字符再+1)
 *    如果上述三种情况都不成立，则认为匹配失败
 *
 *    循环完字符串s，还需要判断pIndex是否循环完，或者pIndex以后的字符都为`*`, 则认为匹配成功，否则匹配失败
 *
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var sIndex = 0;
  var pIndex = 0;
  var sLength = s.length;
  var pLength = p.length;
  var starAtPIndex = -1;
  var startMatchedSIndex = 0;

  while(sIndex < sLength) {
    if (pIndex < pLength && (s[sIndex] === p[pIndex] || p[pIndex] === '?')) {
      pIndex ++;
      sIndex ++;
    } else if (pIndex < pLength && p[pIndex] === '*') {
      starAtPIndex = pIndex;
      startMatchedSIndex = sIndex;
      pIndex ++;
    } else if (starAtPIndex != -1) {
      pIndex = starAtPIndex + 1;
      sIndex = ++startMatchedSIndex;
    } else {
      return false;
    }
  }

  while(pIndex < pLength && p[pIndex] === '*') {
    pIndex ++;
  };

  return pIndex === pLength;
};

