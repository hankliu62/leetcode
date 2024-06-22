/**
 * 实现strStr()
 *
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。
 *
 * 示例 1:
 *  输入: haystack = "hello", needle = "ll"
 *  输出: 2
 *
 * 示例 2:
 *  输入: haystack = "aaaaa", needle = "bba"
 *  输出: -1
 *
 * 说明:
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */

/**
 * 在给定的字符串中查找子字符串首次出现的位置。
 * @param haystack 主字符串，要搜索的字符串。
 * @param needle 子字符串，要查找的字符串。
 * @returns 如果找到子字符串，返回其在主字符串中的起始位置；如果没有找到，返回-1。
 */
var strStr = function(haystack: string, needle: string): number {
  // 获取主字符串和子字符串的长度
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  // 遍历主字符串，寻找子字符串的起始位置
  for (let i = 0; i <= haystackLength - needleLength; i ++) {
      // 如果当前字符匹配子字符串的首字符
      if (haystack[i] === needle[0]) {
          let j;
          // 遍历子字符串，检查是否完全匹配
          for (j = 1; j < needleLength; j ++) {
              if (haystack[i + j] !== needle[j]) {
                  break; // 如果发现不匹配，跳出内层循环
              }
          }

          // 如果内层循环正常结束，说明子字符串完全匹配
          if (j === needleLength) {
              return i; // 返回子字符串的起始位置
          }
      }
  }

  // 如果没有找到子字符串，返回-1
  return -1;
};
