/**
 * 文本左右对齐 https://leetcode-cn.com/problems/text-justification/ [困难]
 *
 * 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 * 你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 *
 * 说明:
 *  - 单词是指由非空格字符组成的字符序列。
 *  - 每个单词的长度大于 0，小于等于 maxWidth。
 *  - 输入单词数组 words 至少包含一个单词。
 *
 * 示例:
 *  输入:
 *  words = ["This", "is", "an", "example", "of", "text", "justification."]
 *  maxWidth = 16
 *  输出:
 *  [
 *     "This    is    an",
 *     "example  of text",
 *     "justification.  "
 *  ]
 *
 * 示例 2:
 *  输入:
 *  words = ["What","must","be","acknowledgment","shall","be"]
 *  maxWidth = 16
 *  输出:
 *  [
 *    "What   must   be",
 *    "acknowledgment  ",
 *    "shall be        "
 *  ]
 *  解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
 *       因为最后一行应为左对齐，而不是左右两端对齐。
 *       第二行同样为左对齐，这是因为这行只包含一个单词。
 *
 * 示例 3:
 *  输入:
 *  words = ["Science","is","what","we","understand","well","enough","to","explain",
 *           "to","a","computer.","Art","is","everything","else","we","do"]
 *  maxWidth = 20
 *  输出:
 *  [
 *    "Science  is  what we",
 *    "understand      well",
 *    "enough to explain to",
 *    "a  computer.  Art is",
 *    "everything  else  we",
 *    "do                  "
 *  ]
 */

/**
 * 解题思路:
 *  暴力法：每次记录当前能容纳的单词，以及记录单词总长度，每次都shift一个单词，获得如果该行容纳该单词需要最小的长度，与maxWidth比较
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  if (!words.length) {
    return [];
  }

  var result = [];
  var currentWords = [words.shift()];
  var currentWordsWidth = currentWords[0].length;
  while(words.length) {
    var word = words[0];
    var remainWidth = maxWidth - (word.length + currentWordsWidth + currentWords.length);
    if (remainWidth > 0) {
      currentWordsWidth += word.length;
      currentWords.push(words.shift());
    } else if (remainWidth === 0) {
      currentWordsWidth += word.length;
      currentWords.push(words.shift());
      result.push(currentWords.join(' '));
      currentWords = [];
      currentWordsWidth = 0;
    } else {
      var spaceLength = maxWidth - currentWordsWidth;
      if (currentWords.length === 1) {
        result.push(currentWords.join('') + new Array(spaceLength).fill(' ').join(''));
      } else {
        var str = '';
        var intervalSpaceLength = Math.floor(spaceLength / (currentWords.length - 1));
        var remainSpaceLength = spaceLength % (currentWords.length - 1);
        for (var i = 0; i < currentWords.length; i ++) {
          if (i !== currentWords.length - 1) {
            var currentSpaceLength = i < remainSpaceLength ? intervalSpaceLength + 1 : intervalSpaceLength;
            str += currentWords[i] + new Array(currentSpaceLength).fill(' ').join('');
          } else {
            str += currentWords[i];
          }
        }

        result.push(str);
      }
      currentWords = [];
      currentWordsWidth = 0;
    }
  }

  if (currentWords.length) {
    var str = currentWords.join(' ');
    result.push(str + new Array(maxWidth - str.length).fill(' ').join(''));
  }

  return result;
};
