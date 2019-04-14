/**
 * 串联所有单词的子串
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 *
 * 示例 1：
 *  输入：
 *    s = "barfoothefoobarman",
 *    words = ["foo","bar"]
 *  输出：[0,9]
 *  解释：
 *  从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
 *  输出的顺序不重要, [9,0] 也是有效答案。
 *
 * 示例 2：
 *  输入：
 *    s = "wordgoodgoodgoodbestword",
 *    words = ["word","good","best","word"]
 *  输出：[]
 */

/**
 * 解题思路：
 *  因为每个word的长度是一直的，循环s字符串，每次获取总words长度的子字符串；
 *  通过子字符串与words中的字符串进行比较，当words中的元素存在于子字符串中，且位置正好在words中的元素的长度上，则删除子字符串中words的元素
 *  最终当子字符串长度为0时，则说明能串联匹配所有单词的子串，记录子字符串的位置。
 *
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const result = [];
  if (!words.length) {
    return [];
  }

  var wordsLength = words.join('').length;
  var wordLength = words[0].length;
  for (var i = 0; i < s.length - wordsLength + 1; i ++) {
    var subStr = s.slice(i, i + wordsLength);
    for (var word of words) {
      var index = subStr.indexOf(word);
      if (index === -1) {
        break;
      } else if (index % wordLength !== 0) {
        var lastIndex = index + 1;
        while (index % wordLength !== 0 && lastIndex < wordsLength && index !== -1) {
          index = subStr.indexOf(word, index + 1);
          lastIndex = index + 1;
        }
      }

      if (index % wordLength === 0) {
        subStr = subStr.slice(0, index) + subStr.slice(index + wordLength);
      }
    }

    if (subStr === '') {
      result.push(i);
    }
  }

  return result;
};
