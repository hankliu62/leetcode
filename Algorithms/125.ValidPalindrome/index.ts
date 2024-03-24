/**
 * 验证回文串 https://leetcode-cn.com/problems/valid-palindrome/ [简单]
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *  输入: "A man, a plan, a canal: Panama"
 *  输出: true
 *
 * 示例 2:
 *  输入: "race a car"
 *  输出: false
 */

/**
 * 判断给定的字符串是否为回文。
 * @param s 待判断的字符串。
 * @returns 返回一个布尔值，true表示给定字符串是回文，false表示不是回文。
 */
function isPalindrome(s: string): boolean {
  let left = 0; // 左指针
  let right = s.length - 1; // 右指针
  /**
   * 判断给定字符是否为有效的回文字符。
   * @param char 待判断的字符。
   * @returns 返回一个布尔值，true表示字符是有效的（即字母或数字），false表示不是有效的。
   */
  function isValid(char: string): boolean {
    return /^[a-zA-Z0-9]/.test(char);
  }

  // 循环检查字符串左右两端的字符是否相等
  while (left < right) {
    // 从左向右找到第一个有效字符
    while (left < right && !isValid(s[left])) {
      left ++;
    }

    // 从右向左找到第一个有效字符
    while (left < right && !isValid(s[right])) {
      right --;
    }

    // 忽略大小写比较左右两端字符是否相等，不相等则不是回文
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++; // 左指针向右移动
    right--; // 右指针向左移动
  }

  return true; // 字符串是回文
};
